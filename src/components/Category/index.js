import React from 'react'
import { Anchor, Image } from './styles'

// const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
const DEFAULT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '❓' }) => (
  <Anchor to={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
