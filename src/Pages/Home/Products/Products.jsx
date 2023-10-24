import React, { useEffect, useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        fetch("/Products.json")
        .then(res=>res.json())
        .then(data =>{
            setProducts(data);
        })
    },[])
    return (
        <div className='mt-10'>
            <div className='text-center w-full lg:w-3/4 mx-auto space-y-2'>
                <h1 className='text-bold text-orange-400 text-3xl'>Popular Products</h1>
                <h1 className='text-5xl'>Browse Our Products</h1>
                <p className='w-full lg:w-3/4 mx-auto py-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
                {
                    products.map(product => <div key={product.id} className="card  bg-base-100  border-2">
                        <figure className="px-10 pt-10">
                            <img src={product.image} alt="Shoes" className="rounded-xl w-full h-[200px]" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title text-3xl">{product.name}</h2>
                            <div className="card-actions flex justify-between items-center">
                                <Link className="text-orange-400">Price : $ {product.price}</Link>
                                <Link className="text-orange-400 text-3xl btn btn-circle"><FaArrowCircleRight></FaArrowCircleRight></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='flex justify-center items-center'>
                <button className='btn btn-outline btn-warning mt-7'>More product</button>
            </div>
        </div>
    );
};

export default Products;