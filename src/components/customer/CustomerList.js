import React, { useEffect, useState } from 'react';
import {deleteCustomer, getAllCustomers } from '../../modules/CustomerManager';
import { CustomerCard } from './CustomerCard';

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);


    const getCustomers = () => {
        return getAllCustomers()
        .then(customersFromAPI => {
            setCustomers(customersFromAPI)
        });
    };

    //useEffect lets us access data from API within the module
    // it accepts 2 parameters, a function: getCustomers() and an array: []
    useEffect(() => {
        getCustomers();
    }, []);
    //useEffect tells React to run getCustomers() which fetches API data
    //the empty array tells React to run the function on the FIRST RENDER

const handleDeleteCustomer = id => {
    deleteCustomer(id)
    .then(() => getAllCustomers()
    .then(setCustomers));
};

    return (
        <div className="container-cards">
           {customers.map(customer => <CustomerCard 
           key={customer.id} 
           customer={customer}
           handleDeleteCustomer={handleDeleteCustomer}/>
           )}
        </div>
    );
};