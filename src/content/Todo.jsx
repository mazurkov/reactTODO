import React from "react";
import {observer} from "mobx-react-lite";
import todo from "../store/todo";
import AddTodo from "./AddTodo";
import FetchTodo from "./FetchTodo";
import TodoItem from "./TodoItem";
import "./todolist.scss"

const Todo = observer(() => {
    return (
        <div className="main">
            <div className="container">
                <AddTodo/>
                <FetchTodo/>
                <ul className="todoList">
                    {todo.todos.map(item => {
                            return <TodoItem
                                key={item.id}
                                item={item}
                            />
                        }
                      )
                    }
                </ul>
            </div>
        </div>
    )
})

export default Todo