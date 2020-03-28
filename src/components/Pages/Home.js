import React from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfPhotoCards } from '../../containers/ListOfPhotoCards'
import { ListOfPhotoCardsWithQuery } from '../../containers/ListOfPhotoCardsWithQuery'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={id} />
    </>
  )
}
