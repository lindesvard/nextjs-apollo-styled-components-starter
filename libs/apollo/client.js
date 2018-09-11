import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import createAuthLink from './links/auth'
import createErrorLink from './links/error'
import createHttpLink from './links/http'
import { resetTokens } from './tokens'

export let client

export default ctx => {
  const authLink = createAuthLink(ctx)
  const errorLink = createErrorLink(ctx)
  const httpLink = createHttpLink(ctx)
  const cache = new InMemoryCache()

  client = new ApolloClient({
    cache,
    link: ApolloLink.from([authLink, errorLink, httpLink]),
  })

  client.onResetStore(() => {
    resetTokens(ctx)
  })

  return client
}
