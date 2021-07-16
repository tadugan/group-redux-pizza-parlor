import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import pizzaList from '../pizzaList/pizzaList';
function OrderPizza() {

    const dispatch = useDispatch();
    
    // axios GET all pizzas
function getPizza = () => {
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
    
    return (
        <div classname="App">
            <p>Pizza is awesome!</p>
            <table>
                <th>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>IMG</th>
                        <th>Cost</th>
                    </tr>

                </th>
                <PizzaList/>
            </table>
        </div>

    );
}

export default OrderPizza;
