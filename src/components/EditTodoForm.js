import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {

    // Capturar cambios de estado en el input
    const [value, setValue] = useState(task.task)

    // Capturar los valores cuando ocurre el evento onSubmit
    // Y enviarlos por medio de la función 'addToDo'
    // Esta función esta definida desde el comp padre y se pasa por props.
    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id)

        setValue("")
        
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={value} placeholder="Update Task" onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className='todo-btn'>Update Task</button>
        </form>
    )
}
