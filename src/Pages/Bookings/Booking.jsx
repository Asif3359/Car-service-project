const Booking = ({ booking,handleDelete,handleConfirm }) => {
    // console.log(booking);
    const {_id, customerName, service, date, email, name, img, price,status } = booking;

   
    return (
        <>
            <tr>
                <th>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-square btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar ">
                            <div className="rounded w-12 h-12">
                                <img src={img} alt={img ? `${service}` : "No Image"} />
                            </div>
                        </div>
                    </div>
                </td>
                <td>{service}</td>
                <td>${price}</td>
                <td>${date}</td>
                <th>
                    {
                        status ==='confirm'?<span className="font-bold">Confirmed</span>:<button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">please Confirm</button>
                    }
                    
                </th>
            </tr>
        </>
    );
};

export default Booking;