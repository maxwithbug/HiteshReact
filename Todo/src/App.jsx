import { useState } from 'react'
import './App.css'
import { TodoProvider } from '../context/index';

function App() {
  const [todos, setTodos] = useState([])

const addTodo = (todo) => {
  setTodos((previousTodo)=> [{id:Date.now(), ...todo }  ,...previousTodo])
}
const updateTodo = ( id,todo) => {
  setTodos((previousTodo) => previousTodo.map((prevTodo)=>(prevTodo.id === todo.id ? todo : prevTodo )))
}

const deleteTodo = ( id) = {
  setTodos((prev)=>{})
}

  return (
    <TodoProvider value={{todos,addTodo, updateTodo,deleteTodo}}>
      <h1 className='text-3xl text-green-500'>Todo App</h1>
    </TodoProvider>
  )
}

export default App
