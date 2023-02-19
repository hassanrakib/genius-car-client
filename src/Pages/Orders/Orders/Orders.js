import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Order from "../Order/Order";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  const url = `http://localhost:5000/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);

  const handleDelete = (service_id) => {
    fetch(`http://localhost:5000/orders/${service_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount === 1) {
          const remaining = orders.filter(
            (order) => order.service_id !== service_id
          );
          setOrders(remaining);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleStatusUpdate = (service_id) => {
    fetch(`http://localhost:5000/orders/${service_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "approved" }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.matchedCount) {
          // get the orders that did not changed
          const remaining = orders.filter(
            (order) => order.service_id !== service_id
          );
          // get the order that did change
          const updatedOrder = orders.find(
            (order) => order.service_id === service_id
          );
          updatedOrder.status = "approved";

          // set Orders
          setOrders([...remaining, updatedOrder]);
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <Order
              key={order.service_id}
              order={order}
              handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
