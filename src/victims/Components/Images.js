import React from "react"
import { render } from "@testing-library/react"
class Pictures extends React.Component{
    
    constructor(props){
        super(props)
        this.changeBorder=this.changeBorder.bind(this)
    }
    changeBorder(e){
        var pictureClassName=""
        if (this.props.name=="food"){
        pictureClassName="food-selected"
    }else if (this.props.name=="water"){
        pictureClassName="water-selected"
    }
    else if (this.props.name=="flood"){
        pictureClassName="flood-selected"
    }
    if(pictureClassName!=""){
    var x = document.querySelectorAll("."+pictureClassName);
        if(x.length) {
            x[0].classList.remove(pictureClassName);
        }
        let target = e.currentTarget
        target.classList.toggle(pictureClassName)
    }}

    render(){

    return(
            <img src={this.props.path} onClick = {this.changeBorder} className='pictures'/>

        
    )
    }
}

export default Pictures