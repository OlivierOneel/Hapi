import React from "react"
import {Link} from "react-router-dom"

class mainPage extends React.Component{
    render(){
    return(
        <div className="mainPageContainer">
            <Link to="/victims">
                <button className='mainPageButton'>I'm a victim</button>
            </Link>
            <Link to="/help">
            <button className='mainPageButton'>
                I can help
            </button>
            </Link>
        </div>


    )
    }
}
export default mainPage