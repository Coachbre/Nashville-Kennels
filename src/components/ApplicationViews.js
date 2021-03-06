import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"

import { EmployeeList } from "./employee/EmployeeList"

import { CustomerList } from "./customer/CustomerList"

import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"


// import { AnimalProvider } from "./animal/AnimalProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                <h2>Animals</h2>
              <AnimalList />
            </Route>

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only NUMBERS after the final slash in the URL
  http://localhost:3000/animals/jack
*/}

            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>
        </>
    )
}