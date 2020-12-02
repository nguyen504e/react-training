import { times } from 'lodash'

import faker from 'faker'

faker.seed(123)

const companies = times(20, () => {
  return {
    uuid: faker.random.uuid(),
    suffixes: faker.company.suffixes(),
    name: faker.company.companyName(),
    account: faker.finance.account(),
    address: {
      zipCode: faker.address.zipCode(),
      city: faker.address.city(),
      streetAddress: faker.address.streetAddress(),
      county: faker.address.county(),
      state: faker.address.state(),
      country: faker.address.country(),
    },
  }
})
const companyIds = companies.map((c) => c.uuid)

const products = times(200, () => {
  return {
    uuid: faker.random.uuid(),
    company: faker.random.arrayElement(companyIds),
    name: faker.commerce.productName(),
    type: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  }
})

export default {
  company: companies,
  product: products,
}
