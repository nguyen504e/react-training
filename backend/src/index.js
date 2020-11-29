import { ApolloServer } from 'apollo-server'
import resolvers from './modules/resolvers'
import typeDefs from './modules/typeDefs'
import { createDatasource, seed } from './data-sources'
import mockData from './_mock-data'

const dataSources = createDatasource('my.db')
seed(dataSources, mockData)

const server = new ApolloServer({
  resolvers,
  typeDefs,
  dataSources: () => dataSources,
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
