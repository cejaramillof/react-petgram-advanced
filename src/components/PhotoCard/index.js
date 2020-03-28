import React from 'react'
import { Img, ImgWrapper, Article } from './Styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { userNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = userNearScreen()
  const key = `like-${id}`
  const [like, setLike] = useLocalStorage(key, false)

  return (
    <Article ref={ref}>
      {show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !like && toggleLike({ variables: { input: { id } } })
                  setLike(!like)
                }
                return <FavButton like={like} likes={likes} onClick={handleFavClick} />
              }
            }

          </ToggleLikeMutation>
        </>}
    </Article>
  )
}
