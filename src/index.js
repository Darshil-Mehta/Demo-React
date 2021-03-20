import React from "react"
import ReactDOM from "react-dom"

function App(){
    return (
        <div>
            <h1 className="head">Hello World!</h1>
            <h2 className="body">First App!</h2>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))