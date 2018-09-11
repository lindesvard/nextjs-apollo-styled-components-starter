import { onError } from 'apollo-link-error'
import { Observable } from 'apollo-link'
import { fetchAccessToken } from '../tokens'

const logout = () => {
  console.log('logout user...')
}

export default ctx => onError(({ graphQLErrors, operation, forward }) => {
  const { headers } = operation.getContext()

  const observableRefetchAccessToken = observer => {
    fetchAccessToken(ctx)
      .then(accessToken => {
        operation.setContext(() => ({
          headers: {
            ...headers,
            authorization: `Bearer ${accessToken}` || null,
          },
        }))
      })
      .then(() => {
        const subscriber = {
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        }

        return forward(operation).subscribe(subscriber)
      })
      .catch(error => {
        logout()
        observer.error(error)
      })
  }

  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.message === 'unauthenticated') {
        logout()
      }

      if (err.message === 'jwtExpired') {
        return new Observable(observableRefetchAccessToken)
      }
    }
  }
})
