import React from 'react'

import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'

import './css/index.css'

const TodosLoading = () => {
  return (
    <ul className='loading'>
        <li className='loading-box'>
            <CompleteIcon />
            <p className='loading-txt'></p>
            <DeleteIcon/>
        </li>

        <li className='loading-box'>
            <CompleteIcon />
            <p className='loading-txt'></p>
            <DeleteIcon/>
        </li>

        <li className='loading-box'>
            <CompleteIcon />
            <p className='loading-txt'></p>
            <DeleteIcon/>
        </li>

        <li className='loading-box'>
            <CompleteIcon />
            <p className='loading-txt'></p>
            <DeleteIcon/>
        </li>
    </ul>
  )
}

export { TodosLoading }