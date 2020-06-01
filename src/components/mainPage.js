import React, {Component} from "react"
import {Route, Switch} from "react-router-dom"

class mainPage extends React.Component{
    render(){
    return(
        <div>
            <button onClick={event =>window.location.href="/victims"}>
                I'm a victim
            </button>
            <br/>
            <button onClick={event =>window.location.href="/help"}>
                I can help
            </button>
        </div>


    )
    }
}
export default mainPage