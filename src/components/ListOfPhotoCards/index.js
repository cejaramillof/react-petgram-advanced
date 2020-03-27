import React from 'react'

import { PhotoCard } from '../PhotoCard'
import { List, Item } from './styles'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost' // to make queries like a string

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  console.log(photos)
  return (
    <List>
      {photos.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item>)}
    </List>
  )
}

// HoC Función que se le pasa como parametro un Componente y
// devuelve otro componente, con mejoras o con props injectadas
// Nos permite envolver el componente, y recuperar
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
