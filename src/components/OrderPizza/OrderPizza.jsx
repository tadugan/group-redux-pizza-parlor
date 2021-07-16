
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
// import { HashRouter as Router, Route } from "react-router-dom";
// import pizzaList from '../pizzaList/pizzaList';



function OrderPizza() {

    const [ pizzaList, setPizzaList ] = useState([]);

    const dispatch = useDispatch();

    const history = useHistory();

    function handleClick () {
        alert("You are going to Customer screen");
        history.push('/customer');
    };

    useEffect(() => {
        console.log('useEffect');
        getPizza();
    }, []);
    
    // axios GET all pizzas
    const getPizza = () => {
    axios({
        method: 'GET',
        url: '/api/pizza'
    })
    .then((response) => {
        console.log(response.data);
        // dispatch({ type: 'GET_PIZZA', payload: response.data});
        setPizzaList(response.data);
    })
    .catch((error) => {
        console.log('GET PIZZA ERROR', error);
    });
    }
    // axios POST pizza order
    
    const addToCart = (pizzaId) => {
        console.log('pizzaId');
        dispatch({
            type: 'ADD_PIZZA',
            payload: {
                id: pizzaId,
                quantity: 1
            }
        });
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
                    {pizzaList.map((pizza, index) => (
                        <tr key={index}>
                            <td>{pizza.name}</td>
                            <td>{pizza.description}</td>
                            <td>{pizza.image_path}</td>
                            <td>{pizza.price}</td>
                            <td>
                                <button onClick={() => addToCart(pizza.id)}>Add Pizza</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleClick}>NEXT</button>
        </div>

    );
}

export default OrderPizza;