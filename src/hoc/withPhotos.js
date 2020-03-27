import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost' // to make queries like a string

export const withPhotos = graphql(gql`
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
`)
