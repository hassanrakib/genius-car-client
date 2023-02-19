import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import CarouselItem from "../CarouselItem/CarouselItem";
import "./BannerCarousel.css";

const carouselItemsData = [
  {
    img: img1,
    id: 1,
    prevId: 4,
    nextId: 2,
  },
  {
    img: img2,
    id: 2,
    prevId: 1,
    nextId: 3,
  },
  {
    img: img3,
    id: 3,
    prevId: 2,
    nextId: 4,
  },
  {
    img: img4,
    id: 4,
    prevId: 3,
    nextId: 1,
  },
];

const BannerCarousel = () => {
  return (
    <div className="carousel w-full py-3">
      {carouselItemsData.map((carouselItemData) => (
        <CarouselItem
          key={carouselItemData.id}
          carouselItemData={carouselItemData}
        />
      ))}
    </div>
  );
};

export default BannerCarousel;
