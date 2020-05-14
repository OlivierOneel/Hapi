import React from "react"
import Food from "../Components/Food"
import Water from "../Components/Water"
import Flood from "../Components/Flood"

class FirstPage extends React.Component{

    render(){
            
    return(
        <div>
            <h1 className="test">We are here to help you</h1>
            <p>How much water is there?</p>
            <Flood/>
            <br/>
            <p>How much food do you have left?</p>
            <Food/>
            <br/>
            <p>How much water do you have left?</p>
            <Water/>
            <br/>
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