import React from "react"
import Pictures from "./Images"

class Toiletery extends React.Component{

    render(){
            
    return(
        <div className="housing_items" id="housing_items">
            <Pictures path = {require("../../images/non_essentials/bucket.png")} name="housing_items"/>
            <Pictures path = {require("../../images/non_essentials/camping.png")} name="housing_items"/>
            <Pictures path = {require("../../images/non_essentials/clothes.png")} name="housing_items"/>
            <Pictures path = {require("../../images/non_essentials/rope.png")} name="housing_items"/>



        </div>


    )
    }
}
export default Toiletery