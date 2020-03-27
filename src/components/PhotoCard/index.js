import React, { useRef, useEffect, useState } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Img, ImgWrapper, Button, Article } from './Styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { userNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = userNearScreen()
  const key = `like-${id}`
  const [like, setLike] = useLocalStorage(key, false)
  const Icon = like ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
      {show &&
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <Icon onClick={() => setLike(!like)} size='24px' /> {likes} likes!
          </Button>
        </>}
    </Article>
  )
}
