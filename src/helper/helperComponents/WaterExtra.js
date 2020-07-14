import React, { useState } from 'react'
/* Working well for now ! */
const WaterExtra = (props) => {

    const [selectedState, setSelected] = useState({ choice: "less-ten" })

    const selectionHandler = (e) => {
        e.preventDefault()
        setSelected({ choice: e.target.value })
    };
    return (
        <div className='extraWaterContainer'>
            <h2>Please select the quantity of water you can offer:</h2>
            <select name="water-qty" id="water-qty" value={selectedState.choice} onChange={selectionHandler} >
                <option value="less-ten">10L or less</option>
                <option value="ten-twenty">Between 10L and 20L</option>
                <option value="more-twenty">More than 20L</option>
            </select>
        </div>
    )
}

export default WaterExtra;
