import React from 'react'
import { Link } from "react-router-dom";
import "./Location.css"

export const LocationCard = ({location, handleDeleteLocation}) => (
    //location is passed in as a parameter (module recognizes due to it being a props)
    <section className="location">
        <h3 className="location_name">{location.name}</h3>
        <div className="location_address">{location.address}</div>

        <Link to={`/locations/${location.id}`}>
            <button>Details</button>
        </Link>

    </section>
)