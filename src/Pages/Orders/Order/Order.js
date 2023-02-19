import React, { useEffect, useState } from "react";

const Order = ({ order, handleDelete, handleStatusUpdate }) => {
  const { service_id, service_name, customer, price, phone, status } =
    order;

  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service_id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [service_id]);

  return (
    <tr>
      <th>
        <label>
          <input type="button" onClick={() => handleDelete(service_id)} className="btn btn-ghost" value='X' />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img
                src={service?.img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {service_name}
        <br />
        <span className="badge badge-ghost badge-sm">
          {price ? `$${price}` : "$40"}
        </span>
      </td>
      <td>Purple</td>
      <th>
        <button onClick={() => handleStatusUpdate(service_id)} className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
      </th>
    </tr>
  );
};

export default Order;
