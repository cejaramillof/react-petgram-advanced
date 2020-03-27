import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

// HoC Función que se le pasa como parametro un Componente y
// devuelve otro componente, con mejoras o con props injectadas
// Nos permite envolver el componente, y recuperar
export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
