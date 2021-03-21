import React from "react"

function TodoList(props){
    const styles = {
        color: "#cdcdcd",
        fontStyle: "italic",
        textDecoration: "line-through"
    }
    return (
        <div className="todoitem">
            <input 
                type="checkbox"
                checked={props.isComplete}
                onChange={() => props.handleChange(props.content.id)}
            />
            <p style={props.isComplete ? styles : null}>{props.content.task}</p>
        </div>
    )
}

export default TodoList