
import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { Router, Redirect } from '@reach/router'
import { Detail } from './pages/Detail'
import { NavBar } from './components/NavBar'
// import Favs from './Pages/Favs'
import { NotRegistered } from './pages/NotRegistered'
import { Profile } from './pages/Profile'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

/*
const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
*/
const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
  const { isAuth } = useContext(Context)
  // const urlParams = new window.URLSearchParams(window.location.search)
  // const detailId = urlParams.get('detail')

  return (
    <Suspense fallback={<div />}>
      <Logo />
      <GlobalStyle />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:id' />
        {!isAuth && <NotRegistered path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' noThrow />}
        {!isAuth && <Redirect from='/user' to='/login' noThrow />}
        {isAuth && <Redirect from='/login' to='/' noThrow />}
        <Favs path='favs' />
        <Profile path='user' />
      </Router>

      {/* <UserLogged>
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
      */}
      <NavBar />
    </Suspense>
  )
}
