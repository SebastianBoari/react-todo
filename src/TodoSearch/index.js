import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

function TodoSearch () {
  const { setSearchValue, status, setStatus } = useContext(TodoContext)


  return (
    <article className="search">
      <section className="search_options">
        <label htmlFor="all" className={`search_options-label ${status === 'all' ? "checked" : ""}`} id="label-all">
          Todas
          
          <input 
            type="radio"
            name="search-option" 
            id="all" 
            className="search_options-input"
            onChange={() => setStatus('all')}
           />
        </label>

        <label htmlFor="active" className={`search_options-label ${status === 'active' ? "checked" : ""}`} id="label-active">
          Activas

          <input 
            type="radio"
            name="search-option" 
            id="active" 
            className="search_options-input"
            onChange={() => setStatus('active')}
           />
        </label>

        <label htmlFor="finished" className={`search_options-label ${status === 'finished' ? "checked" : ""}`} id="label-finished">
          Finalizadas
        
          <input 
            type="radio" 
            name="search-option" 
            id="finished" 
            className="search_options-input"
            onChange={() => setStatus('finished')} 
          />
        </label>
      </section>

      <div className="search_browser">
        <input className="search_browser-input" placeholder='Tomar clases de danza...' onChange={(event) => {
          setSearchValue(event.target.value)
        }}/>
      </div>
    </article>
  )
} 

export { TodoSearch }
