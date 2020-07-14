import React, { useState } from 'react'


const HygExtra = () => {

    const [hygieneState, setHygiene ] = useState([
        { isChecked: false, label: "Toothbrush", id: 0 },
        { isChecked: false, label: "Toothpaste", id: 1 },
        { isChecked: false, label: "Toilet Paper", id: 2 },
        { isChecked: false, label: "Desinfectant", id: 3 },
        { isChecked: false, label: "Soap", id: 4 },
        { isChecked: false, label: "Tissues", id: 5 },
        { isChecked: false, label: "Sanitary Pad", id: 6 }
    ])


    return (
        <div>
            <h2>Please check the items you can help with:</h2>
            {hygieneState.map(item => (
                <div key={item.id}>
                    <label key={item.id}>{item.label}
                        <input
                            className='checkbox'
                            type="checkbox"
                            key={item.id}
                            checked={item.isChecked}
                            /* onChange={(e)=> {checkHandler(e,item.id)}} */ 
                            /* onChange={(e)=>setHygiene(
                                [...hygieneState].map(obj =>{
                                    if(obj.id===item.id) {
                                        obj.isChecked=e.target.checked
                                    }
                                }))} */
                        />
                    </label>
                </div>
            ))}
        </div>
    )
}

export default HygExtra;
