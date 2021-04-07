import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeCard } from "./employee/Employee"
import { CustomerList } from "./customer/CustomerList"
import { LocationCard } from "./location/LocationCard"

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
                <EmployeeCard />
            </Route>

            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route path="/locations">
                <LocationCard />
            </Route>
        </>
    )
}