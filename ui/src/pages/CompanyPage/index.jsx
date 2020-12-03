import React, { useState, useEffect, useCallback } from 'react'
import CompanyTable from '../../components/CompanyTable'

import ApplicationLayout from '../../layouts/ApplicationLayout'
import { fetchData } from '../../adaptor'
import { debounce } from 'lodash'

const CompanyPage = (props) => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState()

  useEffect(() => {
    const getCompanyList = async () => {
      const {
        data: { listCompany },
      } = await fetchData(
        '{ listCompany { id name account address { zipCode city streetAddress } } }',
        { name: filter }
      )

      setData(listCompany)
    }

    getCompanyList()
  }, [filter])

  const onDelete = useCallback(() => {})

  const onChangeFilter = debounce((e) => setFilter(e.target.value), 1000, {
    maxWait: 2000,
  })

  return (
    <ApplicationLayout>
      <form class="form-inline pb-2">
        <div class="input-group">
          <input
            type="email"
            class="form-control"
            placeholder="Company name"
            onChange={onChangeFilter}
          />
        </div>
      </form>
      <CompanyTable listCompany={data} onDelete={onDelete} />
    </ApplicationLayout>
  )
}

export default CompanyPage
