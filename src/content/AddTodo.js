import React, {useState} from "react"

import todo from "../store/todo";
function AddTodo() {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        if (value.trim()) {
            todo.addTodoItem(value)
            setValue('')
        }
    }

    return (
        <form className="main-form" onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)} type="text"/>
            <button type="submit">Add todo</button>
        </form>
    )
}

export default AddTodo