import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
import { ListOfPhotoCardsWithQuery } from '../containers/ListOfPhotoCardsWithQuery'
import { Layout } from '../components/Layout'
export const Home = (categoryId) => {
  return (
    <Layout title='Tu app de foto mascotas' subtitle='Con Petgram puedes encontrar fotos de nimales domésticos muy bonitos'>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery {...categoryId} />
    </Layout>
  )
}
