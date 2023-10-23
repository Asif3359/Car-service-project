import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Home from '../../Pages/Home/Home/Home';

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
        }
      ]
    },
  ]);

export default router;