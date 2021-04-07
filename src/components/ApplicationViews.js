import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeList } from "./employee/EmployeeList"
import { CustomerList } from "./customer/CustomerList"
import { LocationList } from "./location/LocationList"

// import { AnimalProvider } from "./animal/AnimalProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route path="/locations">
                <LocationList />
            </Route>
        </>
    )
}