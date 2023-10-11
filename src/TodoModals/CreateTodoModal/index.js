import React, { useContext, useState } from 'react'

import { TodoContext } from '../../TodoContext'

import './css/index.css'

const CreateTodoModal = () => {
    const { setOpenModal, addTodo } = useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = useState('')

    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue, false)
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
    <article className='createTodoModal'>
        <header className='createTodoModal_header'>
            <h3 className='header_title'>¿Qué vamos a hacer hoy?</h3>
        </header>
        
        <section className='createTodoModal_form-container'>
            
            <form className='createTodoModal_form' onSubmit={(event) => onSubmit(event)}>
                <div className='form_input-container'>
                    <input 
                        type="text"
                        placeholder='Conquistar el mundo.' 
                        id='descriptionTodo' 
                        className='form_input'
                        value={newTodoValue}
                        onChange={(event) => onChange(event)}
                    />
                </div>

                <div className="form_buttons">
                    <input 
                        type='submit' 
                        id='confirmTodo' 
                        value="Crear"
                    />

                    <button 
                        className="cancelTodo" 
                        onClick={onCancel}>
                    Cancelar
                    </button>
                </div>
            </form>
        </section>
    </article>
    )
}

export { CreateTodoModal }