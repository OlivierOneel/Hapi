import React, { useState } from 'react'


const HygExtra = () => {

    const [hygieneState, setHygiene] = useState([
        { isChecked: false, label: "Toothbrush", id: 0 },
        { isChecked: false, label: "Toothpaste", id: 1 },
        { isChecked: false, label: "Toilet Paper", id: 2 },
        { isChecked: false, label: "Desinfectant", id: 3 },
        { isChecked: false, label: "Soap", id: 4 },
        { isChecked: false, label: "Tissues", id: 5 },
        { isChecked: false, label: "Sanitary Pad", id: 6 }
    ])

/*     const tester = (e) => {
        e.preventDefault()
        console.log(hygieneState)
    } */

    const selectHandler = (item) => {
        let currentState = item;
        currentState.isChecked = !item.isChecked
        setHygiene([
            ...hygieneState
        ])
        /* console.log(hygieneState) */

}

    return (
        <div>
            <h2>Please check the items you can help with:</h2>
            <div>
                {hygieneState.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <label key={item.id}>{item.label}
                                <input
                                    className="checkbox"
                                    type="checkbox"
                                    key={item.id}
                                    onChange={()=>selectHandler(item)}
                                    checked={item.isChecked}
                                />
                            </label>
                        </div>
                    )
                    })}
            </div>
        </div>
    )
}

export default HygExtra;
