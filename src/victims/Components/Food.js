import React from "react"
import Pictures from "./Images"

class Food extends React.Component{

    render(){
            
    return(
        <div>
            <Pictures path = {require("../../images/food_no.png")} name="food"/>
            <Pictures path = {require("../../images/food_some.png")} name="food"/>
            <Pictures path = {require("../../images/food_full.png")} name="food"/>



        </div>


    )
    }
}
export default Food