import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List, Item } from './styles'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <List>
      {photos.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item>)}
    </List>
  )
}
