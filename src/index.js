import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Counter from './Counter';
import TodoList from './TodoList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  
  {
    path: "/counter",
    element: <Counter></Counter>,
  },
  {
    path: "/todolist",
    element: <TodoList/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
