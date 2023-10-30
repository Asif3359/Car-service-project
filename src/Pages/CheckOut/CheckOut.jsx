import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;

    const { user } = useContext(AuthContext);

    const handleBookOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const booking = {
            customerName: name,
            email,
            date,
            img,
            service_id: _id,
            service: title,
            price: price,
        };
        console.log(booking);


        fetch("http://localhost:5000/bookings",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
            })

    }
    return (
        <div>
            <div>
                <h1 className='text-center text-4xl font-bold' >Book Service:{title}</h1>
            </div>
            <div>
                <form onSubmit={handleBookOrder} className="card-body">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={"$" + price} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input type='submit' value="order Confirm" className="btn btn-block" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default CheckOut;