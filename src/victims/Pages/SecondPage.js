import React from 'react';
import Pictures from "../Components/Images"
import { Table } from 'reactstrap';
import Toiletery from "../Components/Toiletery"
import HousingItems from "../Components/HousingItems"
import '../../App.css';
 
const SecondPage = () => {
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

        <button className="secondPageButton" onClick={event =>window.location.href="/victims/last"}>
            Next Page
        </button>
        </div>
    );
}
 
export default SecondPage;