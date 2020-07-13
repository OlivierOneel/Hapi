import React from "react"
import Pictures from "./Images"

class Medecin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            medecin:[]
        }
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }

    increment() {
      this.setState({
          medecin: [...this.state.medecin, ""]
      });
    };
    
    decrement(index) {
        this.state.medecin.splice(index,1)

        this.setState({medecin:this.state.medecin})
    };

    handleChange(e,index){
        this.state.medecin[index]=e.target.value
        this.setState({medecin:this.state.medecin})

    }

    render(){
            
    return(
        <div>
            <Pictures id = "medecin_picture" path = {require("../../images/non_essentials/medecine.png")} name="medecin"/>
            <br/>
            {
                this.state.medecin.map((medecin,index)=>{
                    return(
                        <div key={index}>
                            <input id = 'medecin_name' type="text" placeholder="Insuline; Epipen; etc" onChange={(e)=>this.handleChange(e,index)} value={medecin}/>
                            <button id='MedecinMinusButton' onClick={()=>this.decrement(index)}>-</button>
                        </div>
                    )
                })
            }


            <br/>
            <button id='MedecinAddButton' className='MedecinButton' onClick={this.increment}>+</button>
        </div>



    )
    }
}
export default Medecin