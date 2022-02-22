import React from "react";
import {observer} from "mobx-react-lite";
import todo from "../store/todo";

const FetchTodo = observer(() => {
    return (
        <button onClick={() => todo.fetchTodos()}>Fetch Todos</button>
    )
})

export default FetchTodo