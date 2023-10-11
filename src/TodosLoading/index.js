import React from 'react'

import { CompleteIcon } from '../TodoIcon/Icons/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/Icons/DeleteIcon'

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