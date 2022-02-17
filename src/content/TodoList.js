import React from "react";
import "./todolist.scss"
import TodoItem from "./TodoItem";

function TodoList(props) {

    const todos = props.arrTodos.sort((a, b) => {
        return Number(a.done) - Number(b.done);
    })

    return (
        <ul className="todoList">
            {todos.map((todo, index) => {
                return <TodoItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                    onChange={props.onToggle}/>
            })
            }
        </ul>
    )
}

export default TodoList