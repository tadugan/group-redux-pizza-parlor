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
        {id: 1, quantity: 2 }, 
        {id: 2, quantity: 3 },
        {id: 3, quantity: 5 }
    ],
    customer_name: 'Tim',
    street_address: '777 Oasis Lane',
    city: 'Minneapolis',
    state: 'MN',
    zip: '55557',
    type: 'Delivery',
    total: 20
}

const initialState = {
    pizzas: []
}

// Reducer to keep order in global state
const orderReducer = (state = initialState, action) => {
    if(action.type === 'ADD TO CART') {
        return [
            ...state, action.payload,
        ]
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