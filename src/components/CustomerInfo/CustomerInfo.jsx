import { useState } from "react";
import axios from "axios";
import { dispatch } from "react";
import { useDispatch } from "react-redux";
import { props } from "bluebird";


function CustomerInfo() {
    
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');



    const onNextClick = () => {
        const customer = {
            customer_name: name,
            street_address: address,
            city: city,
            zip: zip
        }
        console.log('dispatching customer info', customer);
        dispatch({
            type: 'ADD_CUSTOMER',
            payload: customer
        });
    }

    return (
        <div>
            <h1>Step 2: Customer Info</h1>
            <input 
                type="text"
                onChange={(event) => setName(event.target.value)} 
                placeholder="Enter Name"
                value={name}
                />
            <input
                type="text"
                onChange={(event) => setAddress(event.target.value)} 
                placeholder="Enter Address"
                value={address}
                />
            <input 
                type="text"
                onChange={(event) => setCity(event.target.value)} 
                placeholder="Enter City"
                value={city}
                />
            <input
                type="text"
                onChange={(event) => setZip(event.target.value)} 
                placeholder="Enter Zip Code" 
                value={zip}
                />   
            <button onClick={onNextClick}>Next</button>
        </div>
    );
}


export default CustomerInfo;