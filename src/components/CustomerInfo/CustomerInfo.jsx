import { useEffect } from "react";
import axios from "axios";
import { dispatch } from "react";
import { useDispatch } from "react-redux";
import { props } from "bluebird";


function CustomerInfo() {
    
    const dispatch = useDispatch();

    // useEffect(() => {
    //     getCustomerInfo();
    // }, [])


    onInputChange = (input) => (event) => {
        this.setState({
            [input]: event.target.value,
        });
    };


    onNextClick = (event => {
        this.props.dispatch({
            type: 'SET_CUSTOMER_INFO', payload: this.state});
    })

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
        <div>
            <h1>Step 2: Customer Info</h1>
            <input 
                type="text"
                onChange={this.onInputChange(customer_name)}
                placeholder="Enter Name"
                />
            <input
                type="text"
                onChange={this.onInputChange(street_address)}
                placeholder="Enter Address"
                />
            <input 
                type="text"
                onChange={this.onInputChange(city)}
                placeholder="Enter City"
                />
            <input
                type="text"
                onChange={this.onInputChange(zip)}
                placeholder="Enter Zip Code" 
                />   
                <button onClick={this.onNextClick}>Next</button>
        </div>
    );
}


export default CustomerInfo;