import React from 'react'
import { Button } from './styles'

import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

export const FavButton = ({ like, likes, onClick }) => {
  const Icon = like ? MdFavorite : MdFavoriteBorder
  return (
    <Button>
      <Icon onClick={onClick} size='24px' /> {likes} likes!
    </Button>
  )
}
