import React, { useContext } from 'react'

import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import {TodoItem} from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodosLoading} from '../TodosLoading'
import { TodosError} from '../TodosError'
import { TodosEmpty} from '../TodosEmpty'
import { Modal } from '../TodoModals'
import { CreateTodoModal } from '../TodoModals/CreateTodoModal'

import './css/index.css'

import { TodoContext } from '../TodoContext'

const AppUI = () => {
  const { 
    loading, 
    error, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext)

  return (
    <div className="background">
      <div className="todo">
        <TodoCounter />
        <TodoSearch />

        <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchedTodos().length === 0) && <TodosEmpty />}

        {searchedTodos().map((todo)=> (
          <TodoItem 
            key={todo.text} 
            todo={todo}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        </TodoList> 

        <CreateTodoButton
        openModal={openModal}
        setOpenModal={setOpenModal}
        />

        {openModal && (
          <Modal>
            <CreateTodoModal/>
          </Modal>
        )}

      </div>
    </div>
  )
}

export { AppUI }