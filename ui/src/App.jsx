import React from 'react'
import { hot } from 'react-hot-loader/root'
import 'bootstrap/scss/bootstrap.scss'
import CompanyPage from './pages/CompanyPage'

const App = () => {
  return (
    <div className="pt-5">
      <CompanyPage />
    </div>
  )
}
export default hot(App)
