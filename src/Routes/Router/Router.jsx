import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SingUp from '../../Pages/SingUp/SingUp';
import Profile from '../../Pages/Profile/Profile';
import CheckOut from '../../Pages/CheckOut/CheckOut';
import Bookings from '../../Pages/Bookings/Bookings';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<div className='flex justify-center items-center h-[80vh]'>
        <div>
            <h3 className='text-center'>Sorry This page not found</h3>
        </div>
      </div>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/profile",
            element:<Profile></Profile>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/singUp",
            element:<SingUp></SingUp>
        },
        {
            path:"/checkout/:id",
            element:<CheckOut></CheckOut>,
            loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:"/bookings",
            element:<PrivateRoute><Bookings></Bookings></PrivateRoute>,
        },
      ]
    },
  ]);

export default router;