import React from "react"
import {Route, Switch} from "react-router-dom"
import SecondPage from "./SecondPage"

class FirstPage extends React.Component{
    constructor (){
        super()
        this.state={
            foodLevel: "2"
        }
    }
    
    render(){
        const imageClick = () => {
            this.state.foodLevel=1
            alert(this.state.foodLevel)
          } 
    return(
        <div>
            <h1>We are here to help you</h1>
            <p>How much food do you have left?</p>
            <img src={require("../../images/full_food.png")} onClick={() => imageClick()}/>
            <img src={require("../../images/some_food.png")} onClick={() => imageClick()}/>
            <img src={require("../../images/no_food.png")} onClick={() => imageClick()}/>
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