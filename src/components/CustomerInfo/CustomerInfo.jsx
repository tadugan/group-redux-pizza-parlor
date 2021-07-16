import { useState, useEffect } from "react";
import axios from "axios";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";


function CustomerInfo() {
    
    const dispatch = useDispatch();

    let [currentCustomer, setCurrentCustomer] = useState({});

    useEffect(() => {
        console.log('in useEffect')
        getCustomerInfo();
    }, [])


    const addCustomer = (newCustomer) => {
        axios({
            method: 'POST',
            url: '/orders',
            data: {id: newCustomer}
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }
}
