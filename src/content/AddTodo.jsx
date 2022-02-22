import React from "react"
import todo from "../store/todo";
import {observer} from "mobx-react-lite";

const AddTodo = observer(() => {
    return (
        <div className="main-form"><input value={todo.newTodo} type="text" onChange={(e) => {
            todo.input = e
        }}/>
            <button onClick={() => todo.addTodo(todo.input)}>Add todo</button>
        </div>
    )
})

export default AddTodo