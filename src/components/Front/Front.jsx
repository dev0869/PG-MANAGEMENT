import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { img13, img14, img15 } from "../../assets/images";
import Complimentary from "../Introsection/Complimentary";
import ContactUs from "../Contact/Contact";

const Front = () => {
  const images = [
    img13,
    img14,
    img15,
  ];

  return (
    <>
      <div id="home">
        <Carousel autoPlay infiniteLoop interval={2000} showThumbs={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                width={100}
                height={"540px"}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      < Complimentary />
      <ContactUs/>
    </>
  );
};

export default Front;
