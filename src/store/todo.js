import {makeAutoObservable} from "mobx"

class Todo {

    todos = [
        {id: 1, title: "lesson 1", completed: false},
        {id: 2, title: "lesson 2", completed: false},
        {id: 3, title: "lesson 3", completed: false},
        {id: 4, title: "lesson 4", completed: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
       this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
        console.log('removeTodo')
    }

    completeTodo(id) {
        console.log('completeTodo')
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} :  todo  )
    }


}

export default new Todo()