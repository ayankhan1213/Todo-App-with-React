import React, { useState } from 'react'

const Todo = () => {
    const [input, setInput] = useState("")
    const [todo, setTodo] = useState([])

    const addTodo = () => {
        if (input.trim() === "") return

        setTodo([...todo, input])
        setInput("")
    }

    const deleteTodo = (index) => {
        const newTodos = todo.filter((_, i) => i !== index)
        setTodo(newTodos)
    }

    return (
        <div className="todo-container">
            <h2>Todo Web App</h2>

            <div className="box">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Enter todo"
                />

                <button onClick={addTodo}>
                    Add
                </button>
            </div>
        
        </div>
    )
}

export default Todo