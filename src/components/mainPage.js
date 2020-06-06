import React from "react"
import {Route, Switch} from "react-router-dom"

class mainPage extends React.Component{
    render(){
    return(
        <div className="mainPageContainer">
            <button onClick={event =>window.location.href="/victims"} className='mainPageButton'>
                I'm a victim
            </button>
            <button onClick={event =>window.location.href="/help"} className='mainPageButton'>
                I can help
            </button>
        </div>


    )
    }
}
export default mainPage