import faker from 'faker'
import { times } from 'lodash'

faker.seed(123)

const companies = times(20, () => {
  return {
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
const accounts = companies.map((c) => c.account)

const products = times(200, () => {
  return {
    company: faker.random.arrayElement(accounts),
  }
})

export default {
  company: companies,
  product: products,
}
