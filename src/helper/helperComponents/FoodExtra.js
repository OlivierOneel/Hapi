import React, { useState } from 'react'

const FoodExtra = (props) => {

    const [foodSelection, setFoodSelection] = useState({
        canned: false,
        babyFood: false,
        vegetables: false,
        meat: false
    });

    const foodTypeSubmit = (e) => {
        e.preventDefault()
        console.log(foodSelection)
    }

    const stateReset = (e) => {
        e.preventDefault()
        setFoodSelection({
            canned: false,
            babyFood: false,
            vegetables: false,
            meat: false
        })
    }

    return (
        <div>
            <h2>Please select the type of food you can offer:</h2>
            <p>{foodSelection.canned}</p>
            <form className="formFoodExtra" onSubmit={foodTypeSubmit}>
                <label >Canned Food
                <input
                        className='checkbox'
                        type="checkbox"
                        id="canned"
                        checked={foodSelection.canned}
                        onChange={(e) => { setFoodSelection({ ...foodSelection,canned: e.target.checked }) }} />
                </label>
                <label >Baby Food
                <input
                        className='checkbox'
                        type="checkbox"
                        id="babyFood"
                        checked={foodSelection.babyFood}
                        onChange={(e) => { setFoodSelection({ ...foodSelection,babyFood: e.target.checked }) }} />
                </label>
                <label >Vegetables
                <input
                        className='checkbox'
                        type="checkbox"
                        id="vegetables"
                        checked={foodSelection.vegetables}
                        onChange={(e) => { setFoodSelection({ ...foodSelection,vegetables: e.target.checked }) }} />
                </label>
                <label >Meat
                <input
                        className='checkbox'
                        type="checkbox"
                        id="meat"
                        checked={foodSelection.meat}
                        onChange={(e) => { setFoodSelection({ ...foodSelection,meat: e.target.checked }) }} />
                </label>
                <br/>
                <button className="buttonHelperFirst" type="submit">Submit</button>
                <button className="buttonHelperFirst" onClick={stateReset}>Reset</button>
            </form>
        </div>
    );
};

export default FoodExtra;
