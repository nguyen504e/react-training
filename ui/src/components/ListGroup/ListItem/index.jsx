import React from 'react'

const ListItem = (props) => {
  return (
    <div
      href="#"
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
    >
      {props.data.itemName}
      <i
        className="bi bi-delete bi-md"
        onClick={(e) => props.onDelete(props.data, e)}
      />
    </div>
  )
}

export default ListItem
