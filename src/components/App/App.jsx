import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
// Import Components
import Checkout from '../Checkout/Checkout';
import AdminOrder from '../AdminOrder/AdminOrder';

function App() {

  // NOTE: Put Axios function in their respective components

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Prime Pizza</h1>
        </header>
        {/* <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p> */}
        <Route path="/" exact>
            <p>Step 1:</p>
            {/* <OrderPizza /> goes here */}
        </Route>
        <Route path="/customer" exact>
            <p>Step 2:</p>
        </Route>
        <Route path="/checkout" exact>
            <Checkout />
        </Route>
        <Route path="/admin" exact>
            <AdminOrder />
        </Route>
      </div>
    </Router>
  );
}

export default App;
