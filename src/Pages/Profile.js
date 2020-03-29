import React, { useContext } from 'react'
import { Context } from '../Context'
import { Button } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export const Profile = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='Perfil'>
      <h1></h1>
      <Button onClick={removeAuth}>Cerrar sesión</Button>
    </Layout>
  )
}
