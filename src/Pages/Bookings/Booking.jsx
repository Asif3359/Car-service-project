const Booking = ({ booking }) => {
    console.log(booking);
    const {customerName,service,date,email,name,img,price}=booking;
    return (
        <>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar ">
                            <div className="rounded w-12 h-12">
                                <img src={img} alt={img?`${service}`:"No Image"} />
                            </div>
                        </div>
                    </div> 
                </td>
                <td>{service}</td>
                <td>${price}</td>
                <td>${date}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </>
    );
};

export default Booking;