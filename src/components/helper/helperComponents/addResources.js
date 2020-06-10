import React, { useState } from 'react'

const resourceList = {
    water: 0,
    food: 0,
};

const AddResources = (resource,selection) => {

    const [foodCount, setfoodCount] = useState(0);
    const [waterCount, setwaterCount] = useState(0);

    const addFood = () => {
        setfoodCount(foodCount + 1);
    }
    const remFood = () => {
        setfoodCount(foodCount - 1);
    }
    const addWater = () => {
        setwaterCount(waterCount + 1);
    }
    const remWater = () => {
        setwaterCount(waterCount - 1);
    }

    return(
        <div className="buttons">

            <button onClick={remFood}>-</button>
            {/* <img src={foodImg} alt="Food" /> */}
            <button onClick={addFood}>+</button>

            <button onClick={remWater}>-</button>
            {/* <img src={waterImg} alt="Water" /> */}
            <button onClick={addWater}>+</button>
            <h2>Food: {foodCount} Water: {waterCount}</h2>
        </div>
    );
};

export default AddResources;