import React from "react"
import Pictures from "./Images"

class Flood extends React.Component{

    render(){
            
    return(
        <div>
            <Pictures path = {require("../../images/essentials/flood_low.png")} name="flood"/>
            <Pictures path = {require("../../images/essentials/flood_medium.png")} name="flood"/>
            <Pictures path = {require("../../images/essentials/flood_high.png")} name="flood"/>



        </div>


    )
    }
}
export default Flood