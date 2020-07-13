import React, { useState } from 'react'
import { Table } from 'reactstrap';

const GeoLocation = (props) => {

    const [{ latitude, longitude, dispLat, dispLon }, setCoords] = useState({
        latitude: "Lat", longitude: "Long", dispLat: "Lat", dispLon: "Long"
    });

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
            var x = document.querySelectorAll(".locNoNumber");
            if(x.length) {
                x[0].classList.remove("locNoNumber");
                x[0].classList.add("locNumber")
            }
            
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
            dispLon: Number(position.coords.longitude).toFixed(4),
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
            <br/>
            <Table className="geoLoc">
                <tr>
                    <td className="locName">Latitute: </td>
                    <td className="locNoNumber">{dispLat}</td>
                </tr>
                <tr>
                    <td className="locName">Longitude: </td>
                    <td className="locNoNumber">{dispLon}</td>
                </tr>


            </Table>

        </div>
    )

}

export default GeoLocation;