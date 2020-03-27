import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Query } from 'react-apollo' // to use render props
import { gql } from 'apollo-boost' // write querys with graphql

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)

// render props
// Convierten la prop children, y en lugar de renderizar un elemento (como normalmente)
// renderizan una función (renderProp) que retorna el componente que queremos renderizar
// la render props, recibe como parametro la información que queremos injectar en el componente

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! ⛔</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}
