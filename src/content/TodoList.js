import React from "react";
import "./todolist.scss"
import TodoItem from "./TodoItem";
import {observer} from "mobx-react-lite";
import todo from "../store/todo";

const TodoList = observer( ()=> {
    const todos = todo.arrTodos

    return (
        <ul className="todoList">
            {todos.map((t, index) => {
                return <TodoItem
                    key={t.id}
                    todo={t}
                    completeTodo = { todo.completeTodo }
                    />
            })
            }
        </ul>
    )
})

export default TodoList