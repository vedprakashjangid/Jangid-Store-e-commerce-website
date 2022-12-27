import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ProductContext } from './context/ProductContext';
import reportWebVitals from './reportWebVitals';
import { FilterContextProvider } from './context/filterContext';
import {CartContextProvider} from "./context/CartContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductContext>
      <FilterContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </FilterContextProvider>
    </ProductContext>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
