import React, { useState, useEffect } from 'react'
import { Category } from '../Category'

// import { categories as mockCategories } from '../../../api/db.json'
import { List, Item } from './styles'
import { useGetData } from '../../hooks/useGetData'

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { data: categories, loading } = useGetData('https://petgram-server.javierfuentesm.now.sh/categories')

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
