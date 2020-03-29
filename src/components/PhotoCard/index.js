import React from 'react'
import { Img, ImgWrapper, Article } from './Styles'
import { userNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked: like, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = userNearScreen()
  // const key = `like-${id}`
  // const [like, setLike] = useLocalStorage(key, false)

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
                  toggleLike({ variables: { input: { id } } })
                  // !like && toggleLike({ variables: { input: { id } } })
                  // setLike(!like)
                }
                return <FavButton like={like} likes={likes} onClick={handleFavClick} />
              }
            }

          </ToggleLikeMutation>
        </>}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  like: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${componentName} - ${propName} value MUST be defined`)
    }

    if (propValue < 0) {
      return new Error(`${componentName} - ${propName} value MUST be positive`)
    }
  }
}