import React, { useState, useEffect } from 'react';
import { getLocationById } from '../../modules/LocationManager';
import './LocationDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const [location, setLocation] = useState({});
// ^ leave useState() empty so that it can accept all 
    const {locationId} = useParams();
    const history = useHistory();

    useEffect(() => {
        // getLocationById(id) from LocationManager, store data, then put it into state
         getLocationById(locationId)
         .then(location => {
             setLocation ({
                name: location.name,
                address: location.address,
                hours: location.hours,
                employee: location.employee
             });
            });
         }, [locationId]);

         return (
             <section className="location">
                 <h3 className="location_name">{location.name}</h3>
                 <div className="location_address">{location.address}</div>
                 <div className="location_hours">Hours of Operation: {location.hours}</div>
                 <div className="location_employees">Lead: {location.employee?.name}</div>
             </section>
            );
         }
