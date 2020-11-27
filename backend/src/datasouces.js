import Lokijs from 'lokijs'

export const createDatasource = (name) => {
  const db = new Lokijs(name)

  return {
    company: db.addCollection('company', { indices: ['name'] }),
  }
}
