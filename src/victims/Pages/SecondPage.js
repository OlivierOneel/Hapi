import React from 'react';
import Pictures from "../Components/Images"
import { Table } from 'reactstrap';
import Toiletery from "../Components/Toiletery"
import '../../App.css';
 
const SecondPage = () => {
    return (
       <div>
          <h1>Hello again victims</h1>
          <Table responsive>
            <tr>
                <td><Pictures id = "medecin_picture" path = {require("../../images/medecine.png")} name="medecin"/></td>
                <td><Pictures id = "toilet_picture" path = {require("../../images/toilet.png")} name="toilet"/></td>
                <td><Pictures id = "pet_picture" path = {require("../../images/pets.png")} name="pet"/></td>
                <td><Pictures id = "pet_picture" path = {require("../../images/pets.png")} name="pet"/></td>
            </tr>
            <tr>
                <td><input id = 'medecin_name' className="medecin_name" type="text" placeholder="Insuline; Epipen; etc"/></td>
                <td className="Toiletery" id="Toiletery"><Toiletery/></td>
            </tr>


          </Table>
        <button onClick={event =>window.location.href="/victims/last"}>
            Next Page
        </button>
        </div>
    );
}
 
export default SecondPage;