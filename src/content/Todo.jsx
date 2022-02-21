import React from "react";
import {observer} from "mobx-react-lite";
import todo from "../store/todo";

const Todo = observer(() => {
    console.log('render')
    return (
        <div>
            <div> <input type="text" onChange={(e) => { todo.newTodo = e.target.value }}/> <button onClick={ ()=> todo.addTodo(todo.newTodo) }>Add todo</button>
            </div>
            <button onClick={() => todo.fetchTodos()}>Fetch Todos</button>
            {
                todo.todos.map(item => <div className="todo" key={item.id}>
                    <input type="checkbox" checked={item.completed} onChange={() => todo.completeTodo(item.id)}/>
                    {item.title}
                    <button onClick={() => todo.removeTodo(item.id)}>X</button>
                </div>)}
        </div>
    )
})

export default Todo