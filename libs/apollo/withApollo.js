import withApollo from 'next-with-apollo'
import createClient from './client'

export default withApollo(createClient)
