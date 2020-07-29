import React, { useState, useRef, useEffect } from 'react'
import WaterExtra from "./WaterExtra"
import FoodExtra from "./FoodExtra"
import HygExtra from "./HygExtra"


const ResourceSelection = (props) => {
    const [water, setWater] = useState(false)
    const [food, setFood] = useState(false)
    const [hygiene, setHygiene] = useState(false)

    const [waterToggled, setWaterToggle] = useState(false)
    const [foodToggled, setFoodToggle] = useState(false)
    const [hygieneToggled, setHygieneToggle] = useState(false)

    const checkHandler = (id) => {
        switch (id) {
            case "water":
                setWater(!water)
                setWaterToggle(!waterToggled)
                break;
            case "food":
                setFood(!food)
                setFoodToggle(!foodToggled)
                break;
            case "hygiene":
                setHygiene(!hygiene)
                setHygieneToggle(!hygieneToggled)
                break;
            default:
                break;
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div>
            <form className="formResourceList" onSubmit={submitForm}>
                <label>Water
            <input className="checkbox" type="checkbox" key="water" checked={water} onChange={() => checkHandler("water")} />
            </label>
                <label>Food
            <input className="checkbox" type="checkbox" key="food" checked={food} onChange={() => checkHandler("food")} />
                </label>
                <label>Hygiene
            <input className="checkbox" type="checkbox" key="hygiene" checked={hygiene} onChange={() => checkHandler("hygiene")} />
                </label>

                {water ? <div>
                    <WaterExtra />
                </div> : null}
                {food ? <div>
                    <FoodExtra />
                </div> : null}
                {hygiene ? <div>
                    <HygExtra />
                </div> : null}
                <div className="form-submit-btn">
                <button id='DisabledButton' disabled={true} type="submit">Submit</button>
                <button id='EnabledButton' className="hiddenButton" type="submit">Submit</button>
                </div>
            </form>

        </div>

    )
};
export default ResourceSelection;