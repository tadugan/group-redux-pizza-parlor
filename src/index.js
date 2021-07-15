import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import redux
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


// Reducers go here:

const pizzaReducer =(state = [], action) => {
    if(action.type === 'GET_PIZZA') {
        return [
            ...state, action.payload,
        ]
    }
    return state;
}

const orderReducer = (state = [] action) => {
    if(action.type === 'ADD TO CART') {
        return [
            ...state, action.payload,
        ]

}
// storeInstance goes here



// TODO: add Provider to App
ReactDOM.render(<App />, document.getElementById('root'));
