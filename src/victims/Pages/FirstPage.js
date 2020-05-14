import React from "react"
import {Route, Switch} from "react-router-dom"
import SecondPage from "./SecondPage"
import Pictures from "../Components/Images"

class FirstPage extends React.Component{

    render(){
            
    return(
        <div>
            <h1 className="test">We are here to help you</h1>
            <p>How much food do you have left?</p>
            <Pictures path = {require("../../images/full_food.png")}/>
            <Pictures path = {require("../../images/some_food.png")}/>
            <Pictures path = {require("../../images/no_food.png")}/>
            <br/>
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