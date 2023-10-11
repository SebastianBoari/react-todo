import React from 'react'
import { EmptyIcon } from '../TodoIcon/Icons/EmptyIcon'

import './css/index.css'

const TodosEmpty = () => {
  return (
    <div className='todosEmpty_container'>
      <EmptyIcon/>
      <p>Nada nuevo por aquí</p>
    </div>
  )
}

export { TodosEmpty }