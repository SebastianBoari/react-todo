import React from 'react'
import { EmptyIcon } from '../TodoIcon/EmptyIcon'
import './TodosEmpty.css'
const TodosEmpty = () => {
  return (
    <div className='todosEmpty_container'>
      <EmptyIcon/>
      <p>Nada nuevo por aquí</p>
    </div>
  )
}

export { TodosEmpty }