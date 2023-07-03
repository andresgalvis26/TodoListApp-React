import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {

    // Capturar cambios de estado en el input
    const [value, setValue] = useState("")

    // Capturar los valores cuando ocurre el evento onSubmit
    // Y enviarlos por medio de la función 'addToDo'
    // Esta función esta definida desde el comp padre y se pasa por props.
    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value)

        setValue("")
        
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={value} placeholder="What's the task today?" onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}
