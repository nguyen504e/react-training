import { isEmpty } from 'lodash'
import React from 'react'

const CompanyTable = ({ listCompany, onDelete = () => {} }) => {
  const showEmpty = () => (
    <tr>
      <td colSpan="5">EMPTY</td>
    </tr>
  )
  const showCompany = (company, idx) => (
    <tr>
      <th>{idx}</th>
      <td>{company.name}</td>
      <td>{company.address.city}</td>
      <td>{company.address.streetAddress}</td>
      <td className="clm-actions">
        <div className="action-group d-flex">
          <a className="btn btn-danger" href="#">
            Edit
          </a>
          <a className="btn btn-primary" onClick={() => onDelete(company)}>
            Delete
          </a>
        </div>
      </td>
    </tr>
  )

  return (
    <div component-name="CompanyTable" className="table-responsive">
      <table className="table table-bordered ">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>City</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {isEmpty(listCompany) ? showEmpty() : listCompany.map(showCompany)}
        </tbody>
      </table>
    </div>
  )
}

export default CompanyTable
