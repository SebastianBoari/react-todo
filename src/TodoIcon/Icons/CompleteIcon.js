import React from 'react'

import { TodoIcon } from '../index'

const CompleteIcon = ({ onComplete, isCompleted }) => {
  return (
    <TodoIcon
        type="check"
        onClick={onComplete}
        isCompleted={isCompleted}
    />
  )
}

export { CompleteIcon }