import { reject } from 'lodash'
import React, { useState, useCallback, useEffect } from 'react'
import faker from 'faker'

import ApplicationLayout from '../../layouts/ApplicationLayout'
import ListGroup from '../../components/ListGroup'
import ListItem from '../../components/ListGroup/ListItem'

const TaskList = (props) => {
  const [items, setItems] = useState([
    { id: 1, itemName: faker.company.companyName() },
    { id: 2, itemName: faker.company.companyName() },
    { id: 3, itemName: faker.company.companyName() },
  ])

  const [id] = useState(1)

  useEffect(() => {
    //..
    return () => {
      //..
    }
  }, [id, items])

  const onDelete = useCallback(
    (item) => {
      setItems(reject(items, item))
    },
    [items]
  )

  return (
    <ApplicationLayout>
      <ListGroup
        items={items}
        listItemComponent={ListItem}
        onDelete={onDelete}
      />
    </ApplicationLayout>
  )
}

export default TaskList
