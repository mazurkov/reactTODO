import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";


function Content() {
    const [arrTodos, setTodos] = React.useState([
        {id: 1, name: "lesson 1", done: false},
        {id: 2, name: "lesson 2", done: true},
        {id: 3, name: "lesson 3", done: false},
        {id: 4, name: "lesson 4", done: false},
    ])

    function toggleTodo(id) {
        setTodos(
            arrTodos.map(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done
                    todo.changed = new Date().getTime()
                }
                return todo
            })
        )
    }

    function addTodo(title) {
        setTodos(arrTodos.concat(
                [
                    {
                        id: new Date().getTime(),
                        name: title,
                        done: false,
                    }
                ]
            )
        )
    }

    return (
        <div className="main">
            <div className="container">
                <AddTodo onCreate={addTodo} />
                <TodoList arrTodos={arrTodos} onToggle={toggleTodo}/>
            </div>
        </div>
    )
}

export default Content