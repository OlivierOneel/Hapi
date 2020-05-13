import React from "react"
import {Route, Switch} from "react-router-dom"

class FirstPage extends React.Component{
    render(){
    return(
        <div>
            <h1>hello help</h1>
            <button onClick={event =>window.location.href="/"}>
                main Page
            </button>
        </div>


    )
    }
}
export default FirstPage