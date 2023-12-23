import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';

import App from './App';

const root = document.getElementById('root') || document.createElement('div');
const rootContainer = ReactDOM.createRoot(root);

rootContainer.render(<App />);
