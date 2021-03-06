import React, { useState, useEffect } from 'react';
//import the components we will need
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, getAnimalById, deleteAnimal } from '../../modules/AnimalManager';


export const AnimalList = () => {
  // Declaring a state variable (as an empty array)
  //'animals' is the variable
  const [animals, setAnimals] = useState([]);
  // -the empty array in useState() is INITIAL value of animals, 
  // and the first element of 'animals' is the CURRENT value (can change anytime so most likely never the same)
  //setAnimals() is used to change the value of 'animals' that is stored in the state

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllAnimals()
    .then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
      // the state variable of 'animals' value is now set to, or
      // equal to: animalsFromAPI, which is literally the array of animals.. in the API)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  const handleDeleteAnimal = id => {
    deleteAnimal(id)
    .then(() => getAllAnimals()
    .then(setAnimals));
  };


  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {animals.map(animal => 
      <AnimalCard 
      key={animal.id}
      animal={animal}
      handleDeleteAnimal={handleDeleteAnimal} />
      )}
    </div>
    //{animal.id} and {animal} (both variable values) are being passed to props which is a 'box' of anything   
    // you'd like to share between components
  );
  
};


