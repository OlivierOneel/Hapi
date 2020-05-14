import React from "react"
import { render } from "@testing-library/react"
class Pictures extends React.Component{
    
    constructor(props){
        super(props)
        this.changeBorder=this.changeBorder.bind(this)
    }
    changeBorder(e){
        var x = document.querySelectorAll(".selected");
        if(x.length) {
            x[0].classList.remove('selected');
        }
        let target = e.currentTarget
        target.classList.toggle('selected')
    }

    render(){

    return(
            <img src={this.props.path} onClick = {this.changeBorder} className='divas'/>

        
    )
    }
}

export default Pictures