import React, { useState } from 'react'

const GeoLocation = (props) => {

    const [{ latitude, longitude }, setCoords] = useState({
        latitude: "Lat", longitude: "Long"
    });

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    const getCoordinates = (position) => {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
        setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }
    const handleLocationError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
            default:
                alert("An unknown error occurred.")
        }
    };


    return (
        <div>
            <button onClick={getLocation}>Get Location</button>
            <p>Latitute:{latitude}</p>
            <p>Longitude:{longitude}</p>

        </div>
    )

}

export default GeoLocation;