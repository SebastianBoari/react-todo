import React from 'react'

import { ErrorIcon } from '../TodoIcon/Icons/ErrorIcon'

import './css/index.css'

const TodosError = () => {
  return (
    <section className='error'>
      <header className='error_header'>
        <ErrorIcon/>
      </header>

      <footer className='error_footer'>
        <h3 className='error_footer-title'>Ups... Ha ocurrido un error.</h3>
        <p className='error_footer-description'>Por favor, intente de nuevo más tarde.</p>
      </footer>
    </section>
  )
}

export { TodosError }