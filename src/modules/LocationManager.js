const remoteURL = "http://localhost:5002"

export const getLocationById = (locationId) => {
    return fetch(`${remoteURL}/location/${locationId}?_expand=location&_expand=customer`)
    .then(res => res.json())
}

export const getAllLocations = () => {
    return fetch(`${remoteURL}/animals`)
    .then(res => res.json())
}