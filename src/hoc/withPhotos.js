import { graphql } from 'react-apollo'
import { GET_ALL_PHOTOS } from '../containers/ListOfPhotoCardsWithQuery'

// HoC Función que se le pasa como parametro un Componente y
// devuelve otro componente, con mejoras o con props injectadas
// Nos permite envolver el componente, y recuperar
export const withPhotos = graphql(GET_ALL_PHOTOS)
