import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //more for testing, can be removed
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //expect to see in html the root element from index.html
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
