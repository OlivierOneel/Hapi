import React from 'react';
import Pictures from "../Components/Images"
import { Table } from 'reactstrap';
import Toiletery from "../Components/Toiletery"
import HousingItems from "../Components/HousingItems"
import '../../App.css';
import {Link} from "react-router-dom"
 
class SecondPage extends React.Component{

    render(){
            
    return (
       <div className='secondPageContainer'>
        <h1>Hello again victims</h1>
        <table className='secondPageTable'>
            <tr>
                <td>
                    <div className='SecondPageDiv'>
                        <Pictures id = "medecin_picture" path = {require("../../images/non_essentials/medecine.png")} name="medecin"/>
                        <br/>
                        <input id = 'medecin_name' className="medecin_name" type="text" placeholder="Insuline; Epipen; etc"/>
                    </div>
                </td>
                <td>
                    <div className='SecondPageDiv'>
                        <Pictures id = "toilet_picture" path = {require("../../images/non_essentials/toilet.png")} name="toilet"/>
                        <br/>
                        <Toiletery/>
                    </div>
                </td>
                <td>
                    <div className='SecondPageDiv'>
                        <Pictures id = "pet_picture" path = {require("../../images/non_essentials/pets.png")} name="pet"/>
                        <br/>
                        <div className = "pet_food" id="pet_food">
                            <Pictures path = {require("../../images/non_essentials/pet-food.png")} name="pet_food"/>
                        </div>
                    </div>
                </td>
                <td>
                    <div className='SecondPageDiv'>
                        <Pictures id = "housing_picture" path = {require("../../images/non_essentials/camping.png")} name="housing"/>
                        <br/>
                        <HousingItems/>
                    </div>
                </td>
            </tr>
        </table>

           
            
            
            
            <br/>
        <Link to='/victims/last'>
            <button className='secondPageButton'>
                Next Page
            </button>   
            </Link>
    
        </div>
    );
}
}
export default SecondPage;