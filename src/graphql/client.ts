import { GraphQLClient } from 'graphql-request'

const GRAPHQL_HOST = process.env.GRAPHQL_HOST || ''
const GRAPHQL_TOKEN = process.env.GRAPHQL_TOKEN

const endpoint = GRAPHQL_HOST

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${GRAPHQL_TOKEN}`
  }
})

export default client
