import React from "react";
import todo from "../store/todo";
import {observer} from "mobx-react-lite";

const TodoItem = observer ((props) => {
       return (
        <li className="todo">
            <input type="checkbox" checked={props.item.completed} onChange={() => todo.completeTodo(props.item.id)}/>
            <strong> {props.item.title} </strong>
            <button onClick={ () => todo.removeTodo(props.item.id) }>&#10008;</button>
        </li>
    )
})

export default TodoItem