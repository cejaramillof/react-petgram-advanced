import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

export const FavButton = ({ like, likes, onClick }) => {
  const Icon = like ? MdFavorite : MdFavoriteBorder
  return (
    <Button>
      <Icon onClick={onClick} size='24px' /> {likes} likes!
    </Button>
  )
}

FavButton.propTypes = {
  like: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}