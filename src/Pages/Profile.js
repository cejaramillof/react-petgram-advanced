import React, { useContext } from 'react'
import { Context } from '../Context'
import { Button } from '../components/SubmitButton'


export const Profile = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>Profile</h1>
      <Button onClick={removeAuth}>Cerrar sesión</Button>
    </>
  )
}
