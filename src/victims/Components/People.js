import React from "react"
import Pictures from "./Images"

class People extends React.Component{

    render(){
            
    return(
        <div>
            <Pictures path = {require("../../images/adult.png")}/>
            <Pictures path = {require("../../images/boy.png")} className="smallPicture"/>
            
            <table>
                <tr>
                    <td>Adult</td>
                    <td>Children</td>
                </tr>
            </table>


        </div>


    )
    }
}
export default People