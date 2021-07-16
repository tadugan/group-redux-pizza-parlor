
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import pizzaList from '../pizzaList/pizzaList';
function OrderPizza() {

    const [ newElement, setNewElement] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect');
    }, []);
    
    // axios GET all pizzas
    const getPizza = () => {
    axios({
        method: 'GET',
        url: '/api/pizza'
    })
    .then((response) => {
        console.log(response.data);
        dispatch({ type: 'GET_PIZZA', payload: response.data,});
    })
    .catch((error) => {
        console.log('GET PIZZA ERROR', error);
    });
    }
    // axios POST pizza order
    
    const addToCart = (event) => {
        event.preventDefault();
        console.log(pizza);
        dispatch({
            type: 'ADD_PIZZA',
            payload: newPizza
        });
        setNewElement('');
    }
    return (
        <div className="App">
            <p>Pizza is awesome!</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>IMG</th>
                        <th>Cost</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td>{pizza.name}</td>
                        <td>{pizza.description}</td>
                        <td>{pizza.image}</td>
                        <td>{pizza.cost}</td>
                        <td>button to add for cart</td> */}
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default OrderPizza;