import React from 'react'
import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import { withApollo } from 'libs/apollo'

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
