import React, { useState, useEffect } from 'react';
import { getAnimalById, deleteAnimal } from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { useParams, useHistory } from "react-router-dom"
// ^^ index.js is wrapped in router so we can access these methods/ useParams allows js to peak into url and see any parameters that have been set
// useHistory allows us to nav from one place to another w/out using links

export const AnimalDetail = () => {
    const [animal, setAnimal] = useState({ name: "", breed: "" });
    // initial rendering shows empty values for name and breed
    const [isLoading, setIsLoading] = useState(true);
  
    const {animalId} = useParams();
    const history = useHistory();

    const handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        setIsLoading(true);
        deleteAnimal(animalId).then(() =>
          history.push("/animals")
        );
      };
  
    useEffect(() => {
      //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
      getAnimalById(animalId)
        .then(animal => {
          setAnimal({
            name: animal.name,
            breed: animal.breed,
            location: animal.location,
            customer: animal.customer
          });
          setIsLoading(false);
        });
    }, [animalId]);

    
  
    return (
      <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        {/* What's up with the question mark???? See below.*/}
        <div className="animal__owner">Owner: {animal.customer?.name}</div>
        <div className="animal__location">Location: {animal.location?.name}</div>
        
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge This Doggo!
        </button>

      </section>
    );
  }