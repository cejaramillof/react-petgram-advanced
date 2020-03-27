// Convert HoC in RenderProps
import React from 'react'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'
import { Query } from 'react-apollo' // to use render props
import { gql } from 'apollo-boost' // write querys with graphql

const query = gql`
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
  <Query query={query} variables={{ categoryId }}>
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
