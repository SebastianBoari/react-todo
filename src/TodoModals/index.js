import React from 'react'
import ReactDOM from 'react-dom'

import './css/index.css'

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className='modal'>
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export { Modal }