import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'

export const NotRegistered = () => {

  const handleSubmit = e => {
    e.preventDefault()
    // onSubmit({ email, password })
  }

  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          return (
            <>
              <UserForm title='Registrarse' onSubmit={handleSubmit} />
              <UserForm title='Iniciar sesión' onSubmit={handleSubmit} />
            </>
          )
        }
      }
    </Context.Consumer>
  )
}
