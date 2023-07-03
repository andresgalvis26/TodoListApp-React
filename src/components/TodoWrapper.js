import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo.js';
import { EditTodoForm } from './EditTodoForm';

uuidv4(); // Inicializar

export const TodoWrapper = () => {

  // Definir arreglo vacio para los todos a guardar
  const [todos, setTodos] = useState([])

  // Función añadir que recibe la tarea, crea una copia y crea un nuevo objeto para guardarlos en el setTodos
  // Esta función se pasa al comp. hijo por props
  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
    console.log(todos)
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo task={todo} key={index}
          toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
      ))}
    </div>
  )
}
