import React from "react";

function TodoItem(props) {
    return (
        <li>
            <input type="checkbox" checked={props.todo.done} onChange={()=> props.onChange(props.todo.id)} />

            <strong>{ props.todo.name }</strong>
        </li>
    )
}

export default TodoItem