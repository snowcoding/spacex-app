import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
})

export default function Apollo(props) {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>
}
