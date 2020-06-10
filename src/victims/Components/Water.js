import React from "react"
import Pictures from "./Images"

class Water extends React.Component{

    render(){
            
    return(
        <div>
            <Pictures path = {require("../../images/essentials/water_no.png")} name="water"/>
            <Pictures path = {require("../../images/essentials/water_some.png")} name="water"/>
            <Pictures path = {require("../../images/essentials/water_full.png")} name="water"/>



        </div>


    )
    }
}
export default Water