import { useState, useEffect } from "react";
import axios from "axios";
import { dispatch } from "react";
import { useDispatch } from "react-redux";
import { props } from "bluebird";


function CustomerInfo() {
    
    const dispatch = useDispatch();

    let [addCustomer, setAddCustomer] = useState({});

    useEffect(() => {
        console.log('in useEffect')
        getCustomerInfo();
    }, [])


    const addCustomer = (newCustomer) => {
        orderTestData = {
        pizzas: [],
        customer_name: 'John',
        street_address: '555 Applewood Lane',
        city: 'Minneapolis',
        state: 'MN',
        zip: '55555',
        type: 'deliver',
        total: '20'
        }

    };

    return (
        <>
        <form onSumbit={handleSubmit}/>
            <input onChange={(event) => setAddCustomer({})} />
            </>
    );
}


export default CustomerInfo;