import React, { useState } from 'react'
/* Working well for now ! */
const WaterExtra = (props) => {

    const [selectedState, setSelected] = useState({ choice: "less-ten" })
    let waterWty = "";

    const selectionHandler = (e) => {
        e.preventDefault()
        setSelected({ choice: e.target.value })
    };

    const submitHandle = (e) => {
        e.preventDefault()
        const choice = selectedState
        console.log(choice.choice)
    };

    return (
        <div>
            <h2>Please select the quantity of water you can offer:</h2>
            <select name="water-qty" id="water-qty" value={selectedState.choice} onChange={selectionHandler} >
                <option value="less-ten">10L or less</option>
                <option value="ten-twenty">Between 10L and 20L</option>
                <option value="more-twenty">More than 20L</option>
            </select>
            <button onClick={submitHandle}>Submit</button>
        </div>
    )
}

export default WaterExtra;
