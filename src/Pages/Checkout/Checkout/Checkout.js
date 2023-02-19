import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { service_id, title, price } = service;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service_id,
      service_name: title,
      customer: name,
      price,
      email,
      phone,
      message,
    };

    // save order to db
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Order placed successfully!");
          form.reset();
        }
      });
  };
  return (
    <div className="card w-full max-w-2xl my-4 mx-auto shadow-2xl bg-base-500">
      <div className="card-body">
        <h2>You are about to order: ${title}</h2>
        <p>Price: ${price}</p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between gap-x-5">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input input-bordered basis-1/2"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input input-bordered basis-1/2"
            />
          </div>
          <div className="flex justify-between gap-x-5">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input input-bordered basis-1/2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered basis-1/2"
            />
          </div>
          <div>
            <textarea
              name="message"
              className="textarea-lg border w-full"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-warning">
              Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
