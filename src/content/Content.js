import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import Context from "../context";


function Content() {
    const [arrTodos, setTodos] = React.useState([
        {id: 1, name: "lesson 1", done: false},
        {id: 2, name: "lesson 2", done: false},
        {id: 3, name: "lesson 3", done: false},
        {id: 4, name: "lesson 4", done: false},
    ])

    function getLastKey(arr) {
        const ids = arr.map(object => {
            return object.id;
        });
        const key = Math.max(...ids)
        return key
    }

    function toggleTodo(id) {
        setTodos(
            arrTodos.map(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done
                }
                return todo
            })
        )
    }

    function addTodo(title) {
        const lastKey = getLastKey(arrTodos)
        setTodos(arrTodos.concat(
                [
                    {
                        id: lastKey + 1,
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
                <AddTodo onCreate={addTodo}/>
                <Context.Provider value={{toggleTodo: toggleTodo}}>
                    <TodoList arrTodos={arrTodos}/>
                </Context.Provider>
            </div>
        </div>

    )
}

export default Content