import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/service.json")
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    })
    return (
        <div className='flex flex-col items-center justify-center mt-5'>
            <div className='text-center space-y-1'>
                <h3 className='text-3xl text-orange-400'>services</h3>
                <h1 className='text-5xl'>Our Service Area</h1>
                <p className='w-full lg:w-3/4 mx-auto pt-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
                {
                    services.map(service => <div key={service._id} className="card  bg-base-100  border-2">
                        <figure className="px-10 pt-10">
                            <img src={service.img} alt="Shoes" className="rounded-xl w-full h-[200px]" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title text-3xl">{service.title}</h2>
                            <div className="card-actions flex justify-between items-center">
                                <Link className="text-orange-400">Price : $ {service.price}</Link>
                                <Link className="text-orange-400 text-3xl btn btn-circle"><FaArrowCircleRight></FaArrowCircleRight></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <button className='btn btn-outline btn-warning mt-7'>More Services</button>
            </div>
        </div>
    );
};

export default Services;