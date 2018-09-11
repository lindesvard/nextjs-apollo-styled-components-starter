import { setContext } from 'apollo-link-context'
import { getAccessToken } from '../tokens'

export default ctx => setContext(async (_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer ${getAccessToken(ctx)}`,
  },
}))
