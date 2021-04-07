import React, { useState, useEffect} from 'react';
import { LocationCard } from './LocationCard';
import { getAllLocations, getLocationById, deleteLocation } from '../../modules/LocationManager';
import { getAllAnimals } from '../../modules/AnimalManager';



export const LocationList = () => {
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        return getAllLocations()
        .then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };

    useEffect(() => {
        getLocations();
    }, []);

    const handleDeleteLocation = id => {
        deleteLocation(id)
        .then(() => getAllLocations()
        .then(setLocations));
    };

    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard
                key={location.id}
                location={location}
                handleDeleteLocation={handleDeleteLocation} />)}
        </div>
    );
};