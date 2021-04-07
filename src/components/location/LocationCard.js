import React from 'react'
import "./Location.css"

export const LocationCard = ({location}) => (
    //location is passed in as a parameter (module recognizes due to it being a props)
    <section className="location">
        <h3 className="location_name">{location.name}</h3>
        <div className="location_address">{location.address}</div>
        {/* className=location address*/}
    </section>
)