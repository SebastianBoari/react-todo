import React from "react";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Finalizar el curso de React.js', completed: false },
//   { text: 'Hacer ejercicio', completed: true },
//   { text: 'Comprar pan', completed: false },
//   { text: 'Practicar ingles', completed: true },
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')

function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue)
  
  const [loading, setLoading] = React.useState(true)

  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName)
  
        let parsedItem
  
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
  
        setLoading(false)
      } catch (error){
        setLoading(false)
        setError(true)
      }
    }, 1000)
  }, [initialValue, itemName])
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return { 
    item,
    saveItem,
    loading,
    error 
  }
}

export { useLocalStorage }