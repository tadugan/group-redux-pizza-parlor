import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import redux
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Test data for order
const cart = {
    pizzas: [],
    customer_name: '',
    street_address: '',
    city: '',
    state: '',
    zip: '',
    type: '',
    total: 0
}

const initialState = {
    pizzas: []
}

// Reducer to keep order in global state
const orderReducer = (state = cart, action) => {
    if(action.type === 'ADD_CUSTOMER') {
        const customer = action.payload;
        return state, {
            customer_name: customer.customer_name,
            street_address: customer.street_address,
            city: customer.city,
            zip: customer.zip,
            pizzas: state.pizzas
        };
    }
    else if (action.type === 'ADD_PIZZA') {
        console.log('in ADD_PIZZA');
        let allPizzas = state.pizzas;
        allPizzas.push(action.payload);
        return state, {pizzas: allPizzas};
    }
    return state;
}

// storeInstance goes here
const storeInstance = createStore(
    combineReducers({
        orderReducer
    }),
    applyMiddleware(logger),
);

// TODO: add Provider to App
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));


// Data Model for orderReducer state
// orderTestData = {
//     pizzas: [],
//     firstName: 'John',
//     lastName: 'Smith',
//     street: '555 Applewood Lane'
//     city: 'Minneapolis',
//     state: 'MN',
//     zip: '55555'
// }