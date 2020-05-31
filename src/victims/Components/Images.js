import React from "react"
class Pictures extends React.Component{
    
    constructor(props){
        super(props)
        this.changeBorder=this.changeBorder.bind(this)
    }
    changeBorder(e){
        switch(this.props.name){
            case 'water':
                this.SingleImageSelected(e,"water-selected")
                break;
            case 'food':
               this.SingleImageSelected(e,"food-selected")
               break;
            case 'flood':
                this.SingleImageSelected(e,"flood-selected")
                break;
            case 'medecin':
                this.ImageSelected(e, 'medecin')
                var input_field = document.querySelector("#medecin_name");
                input_field.classList.toggle("medecin_name")
                break
            case 'toilet':
                this.ImageSelected(e,'toiletery')
                var toileteryBorder = document.querySelectorAll('.toiletery_picture')
                if(toileteryBorder.length) {
                    var i;
                    for(i=1; i<toileteryBorder.length; i++)
                    toileteryBorder[i].classList.remove("toiletery_picture");
                }
                var subToiletery = document.querySelector("#Toiletery");
                subToiletery.classList.toggle("Toiletery")

                break
            case 'toiletery':
                this.ImageSelected(e, 'toiletery')
                break



        }}

SingleImageSelected(e,pictureClassName){
    var x = document.querySelectorAll("."+pictureClassName);
        if(x.length) {
            x[0].classList.remove(pictureClassName);
        }
        let target = e.currentTarget
        target.classList.toggle(pictureClassName)
}

ImageSelected(e,pictureClassName){
    let target = e.currentTarget
    target.classList.toggle(pictureClassName + "_picture")
}

    render(){

    return(
            <img src={this.props.path} onClick = {this.changeBorder} className='pictures'/>

        
    )
    }
}

export default Pictures