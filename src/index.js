import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Login } from './pages/Login';
import App, { Dashboard } from './pages/Dashboard';
import AddEmployee from './pages/AddEmployee';
import ViewEmployee from './pages/ViewEmployee';
import Addcustomer from './pages/addcustomer';
import ViewCustomer from './pages/Viewcostomer';

const root = ReactDOM.createRoot(document.getElementById('root'));

let router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/dashboard",
    element:<App/>
  },
  {
    path:"/addemployee",
    element:<AddEmployee/>
  },
  {
    path:"/viewemployee",
    element:<ViewEmployee/>
  },
  {
    path:"/AddCustomer",
    element:<Addcustomer/>
  },
  {
    path:"/ViewCustomer",
    element:<ViewCustomer/>
  }


])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
