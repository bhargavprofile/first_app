import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './features/products/Products';
import Addproducts from './features/products/Addproducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
       {
        path: '/products',
        element: <Products/>,
        children:[
          {
            path:'/products/addproducts',
            element: <Addproducts/>
          }
        ]
       }
       
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
