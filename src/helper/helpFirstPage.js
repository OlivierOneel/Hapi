import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/* Helper Components Import */
import GeoLocation from "./helperComponents/GeoLocation";
import ResourceSelection from "./helperComponents/ResourceSelection"

class helpFirstPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="helpFirstContainer">
                <h1>Thank you for offering your help</h1>
                    <GeoLocation />
                    <ResourceSelection />
            </div>
        )
    }
}

export default helpFirstPage;