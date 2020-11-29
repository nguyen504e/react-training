import Lokijs from 'lokijs'

export const createDatasource = (name) => {
  const db = new Lokijs(name)

  return {
    company: db.addCollection('company', { indices: ['name'] }),
  }
}

export const seed = (datasource, data) => {
  Object.entries(data).forEach(([key, records]) => {
    const collection = datasource[key]
    if (!collection) {
      return
    }
    collection.insert(records)
  })
}
