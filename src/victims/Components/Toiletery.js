import React from "react"
import Pictures from "./Images"

class Toiletery extends React.Component{

    render(){
            
    return(
        <div className="Toiletery" id="Toiletery">
            <Pictures path = {require("../../images/non_essentials/toilet-paper.png")} name="toiletery"/>
            <Pictures path = {require("../../images/non_essentials/soap.png")} name="toiletery"/>
            <Pictures path = {require("../../images/non_essentials/toothbrush.png")} name="toiletery"/>



        </div>


    )
    }
}
export default Toiletery