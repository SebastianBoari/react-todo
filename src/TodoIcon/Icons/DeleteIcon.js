import React from 'react'

import { TodoIcon } from '../index'

const DeleteIcon = ({ onDelete }) => {
  return (
    <TodoIcon
        type="delete"
        onClick={onDelete}
    />
  )
}

export { DeleteIcon }