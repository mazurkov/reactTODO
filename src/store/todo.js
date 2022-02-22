import {makeAutoObservable} from "mobx"

class Todo {

    todos = [
        {id: 5551, title: "lesson 1", completed: false},
        {id: 5552, title: "lesson 2", completed: false},
        {id: 5553, title: "lesson 3", completed: false},
        {id: 5554, title: "lesson 4", completed: false}
    ]

    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }

    addTodo(todo) {
        if (todo.target.value.trim()) {
            this.todos.push({id: this.getLastKey(), title: todo.target.value, completed: false})
            todo.target.value= ""
        }

    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)

    }

    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} :  todo  )
    }

    fetchTodos(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }

    getLastKey() {
        const ids = this.todos.map(object => {
            return object.id;
        });
        const key = Math.max(...ids)
        return key + 1
    }


}

export default new Todo()