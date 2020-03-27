import React from 'react'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { Query } from 'react-apollo' // to use render props
import { gql } from 'apollo-boost' // write querys with graphql

export const GET_ALL_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={GET_ALL_PHOTOS} variables={{ categoryId }}>
    {renderProp}
  </Query>
)

// Render Props
const renderProp = ({ loading, error, data }) => {
  console.log(data)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error! ⛔</p>
  return <ListOfPhotoCardsComponent data={data} />
}
