import React, { useState, useEffect } from 'react';
//import the components we will need
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, getAnimalById } from '../../modules/AnimalManager';

export const AnimalList = () => {
  // Declaring a state variable (empty array)
  const [animals, setAnimals] = useState([]);

// name of variable: animals
// setAnimals is used to change the value (ex. animals + 2)
// useState('any value') sets the initial value of animals 

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllAnimals()
    .then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {animals.map(animal => <AnimalCard key={animal.id} animal={animal} />
      )}
    </div>
  );
};