// index.js
import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

import App from './App'; // Replace with the root component of your app

ReactDOM.render(
  <Router> {/* Wrap your app with the Router component */}
    <App />
  </Router>,
  document.getElementById('root')
);
