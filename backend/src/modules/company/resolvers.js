import { merge } from 'lodash'

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
    removeCompany: (_, args, { dataSources: { company } }) => {
      const doc = company.findOne({ uuid: args.id })
      if (doc) {
        company.remove(doc)
        return true
      }
      return false
    },
    updateCompany: (_, args, { dataSources: { company } }) => {
      const query = { uuid: args.id }
      const doc = company.findOne(query)
      if (!doc) {
        throw new Error('Entity not found')
      }
      company.update(merge(doc, args.data))
      return company.findOne(query)
    },
  },
}
