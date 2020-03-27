import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

// import { categories as mockCategories } from '../../../api/db.json'
import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // function to execute on render, array with dependencies to re render
  // when is empty array functión like componentDidmount
  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server.javierfuentesm.now.sh/categories')
      .then(res => res.json())
      .then(response => setCategories(response))
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { error, loading, categories }
}

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()

  const renderList = (fixed) => (
    // <List className={fixed ? 'fixed' : ''}>
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>
          : categories.map(category =>
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
