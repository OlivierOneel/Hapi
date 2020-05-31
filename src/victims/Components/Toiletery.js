import React from "react"
import Pictures from "./Images"

class Toiletery extends React.Component{

    render(){
            
    return(
        <div>
            <Pictures path = {require("../../images/toilet-paper.png")} name="toiletery"/>
            <Pictures path = {require("../../images/soap.png")} name="toiletery"/>
            <Pictures path = {require("../../images/toothbrush.png")} name="toiletery"/>



        </div>


    )
    }
}
export default Toiletery