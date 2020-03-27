import React, { useRef, useEffect, useState } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Img, ImgWrapper, Button, Article } from './Styles'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [like, setLike] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like
    } catch (e) {
      return false
    }
  })
  const ref = useRef(null)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    })
  }, [ref])

  const Icon = like ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try {
      setLike(value)
      window.localStorage.setItem(key, value)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Article ref={ref}>
      {show &&
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <Icon onClick={() => setLocalStorage(!like)} size='24px' /> {likes} likes!
          </Button>
        </>}
    </Article>
  )
}
