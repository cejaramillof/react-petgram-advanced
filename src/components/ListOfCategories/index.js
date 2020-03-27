import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'

// import { categories as mockCategories } from '../../../api/db.json'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)

  // function to execute on render, array with dependencies to re render
  // when is empty array functión like componentDidmount
  useEffect(function () {
    window.fetch('https://petgram-server.javierfuentesm.now.sh/categories')
      .then(res => res.json())
      .then(response => setCategories(response))
  }, [])

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category =>
          <Item key={category.id}><Category {...category} /></Item>
        )
      }
    </List>
  )

  useEffect(function () {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
