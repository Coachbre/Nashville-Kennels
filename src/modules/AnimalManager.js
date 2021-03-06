const remoteURL = "http://localhost:5002"

  export const getAnimalById = (animalId) => {
    //be sure your animals have good data and related to a location and customer
    //expanded location/customer data will be used when animal cards allow this info to be shown
   return fetch(`${remoteURL}/animals/${animalId}?_expand=location&_expand=customer&_expand=employee`)
    .then(res => res.json())
  }

  export const getAllAnimals = () => {
    return fetch(`${remoteURL}/animals`)
    .then(res => res.json())
  }

  export const deleteAnimal = (id) => {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }