import React from 'react'
import { Nav, Anchor } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'

export const NavBar = () => {
  return (
    <Nav>
      <Anchor to=''><MdHome size={SIZE} /></Anchor>
      <Anchor to='/favs'><MdFavoriteBorder size={SIZE} /></Anchor>
      <Anchor to='/user'><MdPersonOutline size={SIZE} /></Anchor>
    </Nav>
  )
}
