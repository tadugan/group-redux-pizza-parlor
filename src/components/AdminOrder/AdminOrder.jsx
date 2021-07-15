// import CSS
import './AdminOrder.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function AdminOrder() {
    
    // local state to store array of orders
    const [ orders, setOrders ] = useState([]);

    // axios GET request to retrieve all orders from database
    const fetchOrders = () => {
        axios.get('/api/order')
            .then(response => {
                console.log('the response is:', response.data); // test
                setOrders(response.data)
            })
            .catch(err => {
                console.log('Error retrieving orders:', err);
            });
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="admin-component">
            <h4>Admin Order Page</h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Time Order Placed</th>
                        <th>Type</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.customer_name}</td>
                            <td>{order.time}</td>
                            <td>{order.type}</td>
                            <td>{order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminOrder;