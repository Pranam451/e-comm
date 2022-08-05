import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Carousel = () => {
  const items = [
    <img src="./IMG/carousel-1.jpg" alt="" />,
    <img src="./IMG/carousel-2.jpg" alt="" />,
    <img src="./IMG/carousel-3.jpg" alt="" />,
  ];

  return (
    <div>
      {/* <AliceCarousel
        mouseTracking
        infinite
        disableDotsControls
        autoPlayInterval={1000}
        animationDuration={1500}
        disableButtonsControls
        //responsive={responsive}
        autoPlay
        items={items}
      ></AliceCarousel> */}
    </div>
  );
};
