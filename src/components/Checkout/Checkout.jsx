import { useSelector } from 'react-redux';

// Import CSS
import './Checkout.css';

function Checkout() {

    const currentOrder = useSelector(store => store.orderReducer);

    // Placeholder address data
    let address = {
        name: 'John Smith',
        street: '555 Applewood Lane',
        locale: 'Minneapolis, MN 55555'
    }
    
    // Function to handle submitting the order
    const handleSubmit = () => {
        console.log('Checkout Submit');
        // TODO: add axios POST to here
    }

    return (
        <div className="checkout-component">
            <h2 className="checkout-header">Step 3: Checkout</h2>
            <section className="checkout-customer-info">
                    <p className="checkout-address">
                        {currentOrder.firstName} {currentOrder.lastName}
                        <br />
                        {currentOrder.street}
                        <br />
                        {currentOrder.city}, {currentOrder.state} {currentOrder.zip}
                    </p>
                    <p className="checkout-order-type">For {currentOrder.type}</p>
            </section>
            <section className="checkout-order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                            {currentOrder.pizzas.map((pizza, index) => (
                                <tr key={index}>
                                    <td>{pizza.name}</td>
                                    <td>{pizza.price}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </section>
            <section className="checkout-total">
                <h3>Total: $77.77</h3>
                {/* Submit might be wrong, change to button if it's causing trouble */}
                <button type="submit" onClick={handleSubmit} >Checkout</button>
            </section>
        </div>
    );
}

export default Checkout;