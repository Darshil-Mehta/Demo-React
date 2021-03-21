import React, { Component } from "react"

import AwesomeHeader from  "./AwesomeHeader"
import TodoList from "./TodoList"

class App extends Component{
    render(){
        return (
            <div>  
                <AwesomeHeader />
                <TodoList />
            </div>
        )
    }
}

export default App