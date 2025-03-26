import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { createRoot } from 'react-dom/client'
// import { StrictMode } from 'react'
import ShopContextProvider from './context/ShopContext'; // Import provider

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  // </StrictMode>
)
