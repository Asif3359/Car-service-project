import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Booking from './Booking';
import axios from 'axios';
import useAxios from '../../Hooks/useAxios';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosUse = useAxios();

    const url = `/bookings?email=${user?.email}`
    // const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        axiosUse.get(url)
            .then(res => setBookings(res.data))
    }, [url, axiosUse]);

    const handleDelete = (_id) => {
        const proceed = confirm('Are You sure you Want to DELETE');
        if (proceed) {
            fetch(`https://car-doctor-server-md.vercel.app/bookings/${_id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Delete Successfully");
                        const remaining = bookings.filter(booking => booking._id !== _id);
                        setBookings(remaining);

                    }
                })
        }
    }
    const handleConfirm = (_id) => {
        const proceed = confirm('Are You sure you Want to DELETE');
        if (proceed) {
            fetch(`https://car-doctor-server-md.vercel.app/bookings/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: "confirm" })


            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        alert("update Successfully");
                        const remaining = bookings.filter(booking => booking._id !== _id);
                        const updated = bookings.find(booking => booking._id === _id);
                        updated.status = "confirm";
                        const newBookings = [updated, ...remaining];
                        setBookings(newBookings);

                    }
                })
        }
    }
    return (
        <div>
            <h1 className='text-3xl'>{bookings.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Remove
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Price </th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) => <Booking key={index} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></Booking>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;