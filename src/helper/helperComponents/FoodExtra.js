import React, { useState } from 'react'

const FoodExtra = (props) => {

    const [foodSelection, setFoodSelection] = useState({
        canned: false,
        babyFood: false,
        vegetables: false,
    });

    return (
        <div>
            <h2>Please select the type of food you can offer:</h2>
            
            
                <label >Canned Food
                <input
                        type="checkbox"
                        id="canned"
                        checked={foodSelection.canned}
                        onChange={(e) => { setFoodSelection({ ...foodSelection,canned: e.target.checked }) }} />
                </label>
                <label >Baby Food
                <input
                        type="checkbox"
                        id="babyFood"
                        checked={foodSelection.babyFood}
                        onChange={(e) => { setFoodSelection({ ...foodSelection,babyFood: e.target.checked }) }} />
                </label>
                <label >Vegetables
                <input
                        type="checkbox"
                        id="vegetables"
                        checked={foodSelection.vegetables}
                        onChange={(e) => { setFoodSelection({ ...foodSelection,vegetables: e.target.checked }) }} />
                </label>
            
        </div>
    );
};

export default FoodExtra;
