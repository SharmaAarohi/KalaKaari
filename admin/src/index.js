import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Use ReactDOM from 'react-dom' instead of 'react-dom/client'
// Ensure 'React' is used somewhere in your code to resolve the 'no-unused-vars' error

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

