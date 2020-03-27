import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

export const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <div>
          <img src={src} />
        </div>
      </a>

      <button>
        <MdFavoriteBorder size='24px' /> {likes} likes!
      </button>
    </article>
  )
}
