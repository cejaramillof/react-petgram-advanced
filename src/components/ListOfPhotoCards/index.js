import React from 'react'

import { PhotoCard } from '../PhotoCard'
import { List, Item } from '../ListOfCategories/styles'

export const ListOfPhotoCards = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5].map(photo => <Item key={photo}><PhotoCard /></Item>)}
    </List>
  )
}