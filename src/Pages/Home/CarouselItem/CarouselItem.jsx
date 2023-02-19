import React from "react";
import "./CarouselItem.css";

const CarouselItem = ({carouselItemData}) => {
    const {img, id, prevId, nextId} = carouselItemData;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img w-full relative">
        <img src={img} className="w-full h-full object-cover rounded-2xl" alt="" />
      </div>
      <div className="absolute text-white -translate-y-1/2 left-6 top-1/2">
        <h1 className="text-6xl font-bold mb-8">
          Affordable
          <br />
          Price For Car
          <br />
          Servicing
        </h1>
        <p>
          There are many variations of passages of available, but
          <br />
          the majority have suffered alteration in some form
        </p>
        <div className="mt-8">
          <button className="btn btn-warning mr-5">Discover More</button>
          <button className="btn btn-outline btn-warning">
            Latest Project
          </button>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prevId}`} className="btn btn-circle mr-4">
          ❮
        </a>
        <a href={`#slide${nextId}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
