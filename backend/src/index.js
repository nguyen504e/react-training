import ApolloServer from 'apollo-server'
import resolvers from './resolvers'
import typeDefs from './typeDefs'
import datasource from './datasource'

const server = new ApolloServer({
  resolvers,
  typeDefs,
  datasource,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
