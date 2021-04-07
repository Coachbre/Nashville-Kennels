import React from "react"
import "./Animal.css"

//Props is short for properties and they are used to pass data between React components
//child component can recieve props from the parent component 
//displays props using dot notation
export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
  //animal is passed in as a parameter (module recognizes due to it being a props)
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('../animal/dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">
            {animal.name}
          </span></h3>
          <p>Breed: {animal.breed}</p>
          <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>
            Discharge This Doggo!
          </button>
        </div>
      </div>
    );
  }