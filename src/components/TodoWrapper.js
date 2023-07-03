import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo.js';

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

  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </div>
  )
}
