import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShopProvider, {  } from "./Components/Context/CartContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ShopProvider>
    <App />
    </ShopProvider>
);

