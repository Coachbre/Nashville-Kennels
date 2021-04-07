import React, { useEffect, useState } from 'react';
import {getAllCustomers } from '../../modules/CustomerManager';
import { CustomerCard } from './CustomerCard';

export const CustomerList = () => {
    const [custtomers, setCustomer] = useState([]);


    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            console.log(customersFromAPI);
        });
    };

    //useEffect lets us access data from API within the module
    // it accepts 2 parameters, a function: getCustomers() and an array: []
    useEffect(() => {
        getCustomers();
    }, []);
    //useEffect tells React to run getCustomers() which fetches API data
    //the empty array tells React to run the function on the FIRST RENDER

    return (
        <div className="containr-cards">
            customers should go here in a bit!
        </div>
    );
};