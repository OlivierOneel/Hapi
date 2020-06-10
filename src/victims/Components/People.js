import React from "react"
import Pictures from "./Images"

class People extends React.Component{

    render(){
            
    return(
        <div>
            
            <table>
                <tr>
                    <td><Pictures path = {require("../../images/essentials/adult.png")}/></td>
                    <td>            <Pictures path = {require("../../images/essentials/boy.png")} /></td>
                </tr>
                <tr>
                    <td><p>Adult</p></td>
                    <td><p>Children</p></td>
                </tr>
            </table>


        </div>


    )
    }
}
export default People