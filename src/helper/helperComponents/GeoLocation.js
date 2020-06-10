import React, { useState } from 'react'

const GeoLocation = (props) => {

    const [{ latitude, longitude, dispLat, dispLon }, setCoords] = useState({
        latitude: "Lat", longitude: "Long", dispLat: "Lat", dispLon: "Long"
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
            longitude: position.coords.longitude,
            dispLat: Number(position.coords.latitude).toFixed(4),
            dispLon: Number(position.coords.longitude).toFixed(4)
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
            <button className="buttonHelperFirst" onClick={getLocation}>Get Location</button>
            <p className="geoLoc">Latitute: {dispLat}</p>
            <p className="geoLoc">Longitude: {dispLon}</p>

        </div>
    )

}

export default GeoLocation;