import React from 'react'

import { TodoContext } from '../TodoContext'
import { InformationPanel } from '../InformationPanel'

import './css/index.css'

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext)

  return (
    <header className="todo_header" >
      <InformationPanel 
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
    </header>
  )
} 

export { TodoCounter }
