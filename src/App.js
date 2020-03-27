
import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { ListOfCategories } from './components/ListOfCategories'
import { Logo } from './components/Logo'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { ListOfPhotoCardsWithQuery } from './containers/ListOfPhotoCardsWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <>
      <Logo />
      <GlobalStyle />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCardsWithQuery categoryId={2} />
          </>
      }
    </>
  )
}
