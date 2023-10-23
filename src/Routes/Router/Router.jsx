import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';

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
            path:"/login",
            element:<Login></Login>
        }
      ]
    },
  ]);

export default router;