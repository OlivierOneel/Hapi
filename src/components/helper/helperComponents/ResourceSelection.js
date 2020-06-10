import React, { useState, useRef, useEffect } from 'react'
import WaterExtra from "./WaterExtra"
import FoodExtra from "./FoodExtra"
import HygExtra from "./HygExtra"


const ResourceSelection = (props) => {
    const [water, setWater] = useState(false)
    const [food, setFood] = useState(false)
    const [hygiene, setHygiene] = useState(false)

    const [waterContent, setWaterContent] = useState(null)
    const [foodContent, setFoodContent] = useState(null)
    const [hygieneContent, setHygieneContent] = useState(null)

    const firstSelectionSubmit = (e) => {
        e.preventDefault()
        e.persist()

        if (e.target["water"].checked) {
            setWaterContent(
                <WaterExtra />
            )
        }
        if (e.target["food"].checked) {
            setFoodContent(
                <FoodExtra />
            )
        }
        if (e.target["hygiene"].checked) {
            setHygieneContent(
                <HygExtra />
            )
        }
    }

    const stateReset = (e) => {
        e.preventDefault()
        setWaterContent(null)
        setFoodContent(null)
        setHygieneContent(null)
        setWater(false)
        setFood(false)
        setHygiene(false)
    }

    return (
        <div>
            <form className="formResourceList" onSubmit={firstSelectionSubmit}>
                <label>Water
            <input type="checkbox" id="water" checked={water} onChange={(e) => setWater(e.target.checked)} />
                </label>
                <label>Food
            <input type="checkbox" id="food" checked={food} onChange={(e) => setFood(e.target.checked)} />
                </label>
                <label>Hygiene
            <input type="checkbox" id="hygiene" checked={hygiene} onChange={(e) => setHygiene(e.target.checked)} />
                </label>
                <button type="submit">Submit</button>
                <button onClick={stateReset}>Reset</button>
            </form>
            <div>
                {waterContent}
                {foodContent}
                {hygieneContent}
            </div>
        </div>

    )
};
export default ResourceSelection;