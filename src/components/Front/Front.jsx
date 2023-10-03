import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { img13, img14, img15 } from "../../assets/images";
import { useLocation } from "react-router-dom";
import Example from "../modal/Example";
import Complimentary from "../Introsection/Complimentary";
import ContactUs from "../Contact/Contact";

const Front = () => {
    const location = useLocation();


    const isExamplePage = location.pathname === "/example";
  const images = [
    img13,
    img14,
    img15,
  ];

  return (
    <>

      {isExamplePage ? (
        <>
          <Example />
      
        </>
      ) : (
        // Render the normal content
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
          <div id="complimentary">
            <Complimentary />
          </div>
          <ContactUs />
        </>
      )}
    </>
  );
};

export default Front;
