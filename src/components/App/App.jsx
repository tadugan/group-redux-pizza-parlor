import React from 'react';
import axios from 'axios';
import './App.css';
// Import Components
import Checkout from '../Checkout/Checkout';
import AdminOrder from '../AdminOrder/AdminOrder';

function App() {

  // NOTE: Put Axios function in their respective components

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      {/* TODO: Setup Routes here*/}
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <Checkout />
      <AdminOrder />
    </div>
  );
}

export default App;
