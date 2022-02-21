import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";


function Content() {

    return (
        <div className="main">
            <div className="container">
                <AddTodo />
                <TodoList />
            </div>
        </div>
    )
}

export default Content