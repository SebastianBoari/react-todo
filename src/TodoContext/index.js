import React from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider ({ children }) {
    const { item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
    
    const completedTodos = todos.filter((todo) => !!todo.completed).length
    const totalTodos = todos.length

    const completeTodo = (text) => {
        const newTodos = [...todos]
        
        const todoIndex = newTodos.findIndex((todo) => todo.text === text)
        
        newTodos[todoIndex].completed = true

        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos]
        
        const todoIndex = newTodos.findIndex((todo) => todo.text === text)
        
        newTodos.splice(todoIndex, 1)
        
        saveTodos(newTodos)
    }

    const addTodo = (text, completed) => {
        const newTodos = [ ...todos,
            { text: text, completed: completed }
        ]

        saveTodos(newTodos)
    }

    const [searchValue, setSearchValue] = React.useState('')
    const [status, setStatus] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)

    const searchedTodos = () =>{
        const browser = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase()
    
            const searchText = searchValue.toLowerCase().trim()
    
            return todoText.includes(searchText)
        })

        if(status === "active"){
            return browser.filter((todo) => {
                return todo.completed === false
            })
        } else if(status === "finished"){
            return browser.filter((todo) => {
                return todo.completed === true
            })
        } else {
            return browser
        }
    } 

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
            status,
            setStatus
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider }