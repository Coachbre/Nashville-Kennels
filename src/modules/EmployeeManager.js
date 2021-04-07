const remoteURL = "http://localhost:5002"

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`)
    .then(res => res.json())
}

export const getEmployeeById = (employeeId) => {
   return fetch(`${remoteURL}/employees/${employeeId}?_expand=location&_expand=name`)
    .then(res => res.json())
  }