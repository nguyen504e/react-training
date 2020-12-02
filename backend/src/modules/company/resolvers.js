export default {
  Company: {
    id: (src) => src.uuid,
  },
  Query: {
    listCompany: (_, args, { dataSources }) => {
      return dataSources.company.find(
        args.name ? { name: { $regex: `${args.name}` } } : {}
      )
    },
    getCompany: (src, args, { dataSources }) => {
      return dataSources.company.findOne({ uuid: args.id })
    },
  },
  Mutation: {
    removeCompany: (_, args, { dataSources }) => {
      const { company: companyCollection } = dataSources
      companyCollection.remove({ uuid: args.id })
      return true
    },
    updateCompany: (_, args, { dataSources }) => {
      const { company: companyCollection } = dataSources
      companyCollection.update({ uuid: args.id }, args.data)
      return companyCollection.findOne({ uuid: args.id })
    },
  },
}
