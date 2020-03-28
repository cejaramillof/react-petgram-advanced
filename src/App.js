
import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Home } from './components/Pages/Home'
import { Router } from '@reach/router'
import { Detail } from './components/Pages/Detail'

export const App = () => {
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')

  return (
    <>
      <Logo />
      <GlobalStyle />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:id' />
      </Router>
    </>
  )
}
