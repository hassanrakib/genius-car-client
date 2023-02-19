import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { service_id, img, title, price } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-bold text-orange-500">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${service_id}`}><button className="btn btn-warning">Checkout</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
