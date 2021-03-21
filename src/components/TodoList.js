import React, { Component } from "react"

import TodoItem from "./TodoItem"
import data from "./Data"

class TodoList extends Component{
    constructor(){
        super()
        this.state = {
            todolist: data
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState(prev => {
            const updatedList = prev.todolist.map(todoitem =>{
                if(todoitem.id === id){
                    todoitem.isComplete = !todoitem.isComplete
                }
                return todoitem
            })
            return {
                todolist: updatedList
            }
        })
    }

    render(){
        const TodoItemList = this.state.todolist.map(item => 
            <TodoItem 
                key={item.id}
                content={item} 
                isComplete={item.isComplete} 
                handleChange={this.handleChange} 
            />
        )
        return (
            <div className="todolist">
                {TodoItemList}
            </div>
        )
    }
}

export default TodoList