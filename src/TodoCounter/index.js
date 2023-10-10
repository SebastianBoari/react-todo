import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'
import { InformationPanel } from '../InformationPanel'

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
