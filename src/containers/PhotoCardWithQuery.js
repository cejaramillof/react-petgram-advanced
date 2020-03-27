import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { Query } from "react-apollo" // to use render props
import { gql } from "apollo-boost" // write querys with graphql

const query = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! ⛔</p>
  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {renderProp}
  </Query>
)
