import React from "react"
import "./Employee.css"

export const EmployeeCard = ({employee}) => {
//employee is passed in as a parameter (module recognizes due to it being a props)
    return (
    <section className="employee">
        <h3 className="employee_name">{employee.name}</h3>
        <div className="employee_location">{employee.location}</div>
    </section>
);
    }