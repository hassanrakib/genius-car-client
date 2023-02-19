import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero mt-24 mb-32">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:basis-1/2 relative">
          <img src={person} alt="" className="w-4/5 rounded-2xl" />
          <img
            src={parts}
            alt=""
            className="absolute top-2/3 left-1/3 w-3/5 border-8 border-white rounded-2xl"
          />
        </div>
        <div className="lg:basis-1/2">
          <p className="text-xl text-orange-500">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="py-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected hu
            mour, or randomised words which don't look even slightly believable.
          </p>
          <p className="pb-4">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-warning">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
