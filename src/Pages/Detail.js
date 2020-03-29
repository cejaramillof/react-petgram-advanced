import React from 'react'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = ({ id }) => {
  return (
    <Layout title={`Fotografía ${id}`}>
      {
        /*
          <Helmet>
          <title>Fotografía {id} | Petgram</title>
          </Helmet>
        */
      }
      <PhotoCardWithQuery id={id} />
    </Layout>
  )
}
