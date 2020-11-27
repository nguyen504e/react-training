import React from 'react'
import { isEmpty } from 'lodash'
const ListGroup = (props) => {
  const ListItemComponent = props.listItemComponent
  return (
    <div className="list-group">
      {isEmpty(props.items) ? (
        <div className="list-group-item list-group-item-action"> [EMPTY] </div>
      ) : (
        props.items.map((item) => (
          <ListItemComponent
            key={item.id}
            data={item}
            onDelete={props.onDelete}
          />
        ))
      )}
    </div>
  )
}

export default ListGroup
