
import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Home } from './Pages/Home'
import { Router } from '@reach/router'
import { Detail } from './Pages/Detail'
import { NavBar } from './components/NavBar'
import { Favs } from './Pages/Favs'
import { NotRegistered } from './Pages/NotRegistered'
import { Profile } from './Pages/Profile'
import Context from './Context'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

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
      {/* <UserLogged> */}
      <Context.Consumer>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='favs' />
                <Profile path='user' />
              </Router>
              : <Router>
                <NotRegistered path='favs' />
                <NotRegistered path='user' />
              </Router>
        }
      </Context.Consumer>
      <NavBar />
    </>
  )
}
