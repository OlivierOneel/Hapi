import React from "react"
import {Route, Switch} from "react-router-dom"
import SecondPage from "./SecondPage"

class FirstPage extends React.Component{
    render(){
    return(
        <div>
            <h1>hello Victims</h1>
            <button onClick={event =>window.location.href="/victims/2"}>
                Next Page
            </button>
            <button onClick={event =>window.location.href="/victims/last"}>
                End
            </button>
        </div>


    )
    }
}
export default FirstPage