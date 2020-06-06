import React from "react"
import Food from "../Components/Food"
import Water from "../Components/Water"
import Flood from "../Components/Flood"
import People from "../Components/People"
import Counter from "../Components/Counter"

class FirstPage extends React.Component{

    render(){
            
    return(

        <div className='firstPageContainer'>
            <h1>We are here to help you</h1>
            <p>How much water is there?</p>
            <Flood/>
            <br/>
            <p>How much food do you have left?</p>
            <Food/>
            <br/>
            <p>How much water do you have left?</p>
            <Water/>
            <br/>
            <p>How many people are you?</p>
            <People/>
            <table>
                <tr>
                    <td><Counter className='Counter_1'/></td>
                    <td><Counter className='Counter_1'/></td>
                </tr>
            </table>
            <br/>
            <button className='FirstPageButton' onClick={event =>window.location.href="/victims/2"}>
                Next Page
            </button>       
        </div>



    )
    }
}
export default FirstPage