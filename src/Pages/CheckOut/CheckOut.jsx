import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const service = useLoaderData();
    const {title,_id,Price}=service;
    return (
        <div>
           {title}
        </div>
    );
};

export default CheckOut;