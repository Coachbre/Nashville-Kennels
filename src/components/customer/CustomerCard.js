import React from 'react'
import "./Customer.css"

export const CustomerCard = ({customer, handleDeleteCustomer}) => (
    //handleDeleteCustomer() and customer is passed in as a parameter (module recognizes due to it being a props)
    <section className="customer">
        <h3> Name: <span className="customer_name">{customer.name}</span></h3>
        <div className="customer_address">{customer.address}</div>
        <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>
            Remove Client
        </button>
    </section>
)