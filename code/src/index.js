import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { CounterProvider } from './Context/Counter';
import { CartProvider } from './Context/Cart';
import { WeatherProvider } from './Context/Weather';
import { BrowserRouter } from'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
<CartProvider>
  <WeatherProvider>

    <App />
  </WeatherProvider>
</CartProvider>
</BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
