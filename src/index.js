import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server.javierfuentesm.now.sh/graphql',
  // request propertie has been executed before each request
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: ({ networkError }) => {
    if (networkError.result.code === 'invalid_token') {
      window.localStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

ReactDOM.render(
  // <Context.Provider value={{ isAuth: true }}>
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
