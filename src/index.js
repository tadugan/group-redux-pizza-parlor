import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import redux
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Test data for order
const orderTestData = {
    pizzas: [
        {name: 'Pepperoni', price: 10}, 
        {name: 'BBQ Chicken', price: 12},
        {name: 'Supreme', price: 9},
    ],
    firstName: 'Tim',
    lastName: 'Dugan',
    street: '777 Oasis Lane',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55557',
    type: 'Delivery'
}

// Reducers go here:


// Reducer to keep pizzas in global state
const pizzaReducer =(state = [], action) => {
    if(action.type === 'GET_PIZZA') {
        return [
            ...state, action.payload,
        ]
    }
    return state;
}

// Reducer to keep order in global state
const orderReducer = (state = orderTestData, action) => {
    if(action.type === 'ADD TO CART') {
        return [
            ...state, action.payload,
        ]
    }
    return state;
}

// storeInstance goes here
const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
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