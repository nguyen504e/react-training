export default {
  Company: {
    id: (src) => src['$loki'],
  },
  Query: {
    listCompany: (_, __, { dataSources }) => {
      return dataSources.company.find({})
    },
  },
}
