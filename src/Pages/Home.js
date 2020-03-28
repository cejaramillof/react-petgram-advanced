import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
import { ListOfPhotoCardsWithQuery } from '../containers/ListOfPhotoCardsWithQuery'

export const Home = (categoryId) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery {...categoryId} />
    </>
  )
}
