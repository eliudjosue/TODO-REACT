import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Todos from './components/Todos'

const inicialStateTodo = [{
  id:1,
  title: "tarea #1",
  description: "description #1",
  state: "Pendiente",
  priority: true,
},
{
  id:2,
  title: "tarea #2",
  description: "description #2",
  state: true,
  priority: true,
},
{
  id:3,
  title: "tarea #1",
  description: "description #3",
  state: true,
  priority: true,
}]
function App() {
  const [todos, setTodos] = useState(inicialStateTodo)
  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  const deleteTodo = id => {
    const newArray = todos.filter(todo => todo.id !== id);
    setTodos(newArray)
  }

  const updateTodo = id => {
    const newArray = todos.map(todo => {
      if (todo.id === id) {
        todo.state = !todo.state
      }
      return todo
    })

    setTodos(newArray)
  }
  return (
    <div className="container">
      <Formulario addTodo={addTodo}/>
      <Todos todos={todos} 
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}/>
    </div>
  )
}

export default App
