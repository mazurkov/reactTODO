import React, { useContext } from "react";
import Context from "../context";

function TodoItem(props) {
    const { toggleTodo } = useContext(Context)
    return (
        <li>
            <input type="checkbox" checked={props.todo.done} onChange={()=> toggleTodo(props.todo.id)} />
            <strong>{ props.todo.name }</strong>
        </li>
    )
}

export default TodoItem