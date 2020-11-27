import React from 'react'
import { hot } from 'react-hot-loader/root'
import 'bootstrap/scss/bootstrap.scss'
import TaskList from './pages/TaskList'

const App = () => {
  const data = 123
  return (
    <div className="pt-5">
      <TaskList data={data} />
    </div>
  )
}
export default hot(App)
