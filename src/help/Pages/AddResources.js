import React, {useState} from 'react';
import foodImg from './img/food.png';
import waterImg from './img/water.png';

const resourceList = {
    water: 0,
    food: 0,
}

function AddResources(resource,selection) {
/*     if (resource === "food" && selection === "+") {
        ++resourceList.food;
        console.log(JSON.stringify(resourceList));
    } else if (resource ==="food" && selection === "-") {
        --resourceList.food;
        console.log(JSON.stringify(resourceList));
    }else if (resource === "water" && selection === "+") {
        ++resourceList.water;
        console.log(JSON.stringify(resourceList));
    } else if (resource ==="water" && selection === "-") {
        --resourceList.water;
        console.log(JSON.stringify(resourceList));
    } */

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
            <img src={foodImg} alt="Food" />
            <button onClick={addFood}>+</button>

            <button onClick={remWater}>-</button>
            <img src={waterImg} alt="Water" />
            <button onClick={addWater}>+</button>
            <h2>Food: {foodCount} Water: {waterCount}</h2>
        </div>
    );
}

export default AddResources;