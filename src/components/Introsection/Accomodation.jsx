import { Accomodations } from "../../constants/complementdata";
import { Stack } from "@mui/material";
import "../component.css";
import { Link } from "react-router-dom";

const Accomodation = () => {
  return (
    <div id="services" className="bloh relative z-90">
      <br />
      <svg className="svv"
        style={{
          position: "absolute",
          left: "-20%",
          top: "9",
          width: "45%",
          zIndex: " 1",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="408"
        height="408"
        viewBox="0 0 408 408"
      >
        <path
          d="M204,70C130.112,70,70,130.112,70,204s60.112,134,134,134,134-60.112,134-134S277.888,70,204,70m0-70C316.666,0,408,91.334,408,204S316.666,408,204,408,0,316.666,0,204,91.334,0,204,0Z"
          fill="#FFF8F0"
        ></path>
      </svg>

      <svg className="svv"
        style={{
          position: "absolute",
          right: "-20%",
          top: "190",
          width: "45%",
          zIndex: " 1",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="408"
        height="408"
        viewBox="0 0 408 408"
      >
        <path
          d="M204,70C130.112,70,70,130.112,70,204s60.112,134,134,134,134-60.112,134-134S277.888,70,204,70m0-70C316.666,0,408,91.334,408,204S316.666,408,204,408,0,316.666,0,204,91.334,0,204,0Z"
          fill="#FFF8F0"
        ></path>
      </svg>

      <h2
        className="text-4xl md:text-3xl m-3 md:m-0  advancetext mb-8"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        Accomodation
      </h2>
      <p className="w-[100%] z-[999] md:w-[50%] relative text-lg font-semibold text-gray-800  flex justify-center mx-auto text-justify md:text-center">
        Experience comfort and style in our accommodations, designed for your
        ultimate relaxation. From cozy rooms to spacious suites, find your
        perfect retreat with modern amenities and stunning views.
      </p>

      <br />
      <div>
        <Stack
          position={"relative"}
          zIndex={999}
          flexDirection={"row"}
          gap={3}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {Accomodations.map((e, i) => {
            const { text, img } = e;

            return (
              <Link to={'/booking'} className="text-black ">
                <Stack key={i} className="carding">
                  <img src={img} alt="harami" />
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p={2}
                  >
                    <h5>
                      ₹ 25,999.00 <br />
                      <span style={{ color: "orangered", fontSize: "16px" }}>
                        /Per Month
                      </span>
                    </h5>
                    <button className="bookcardbut">Book Now</button>
                  </Stack>

                  <div className="cardbanner">
                    <h4>{text}</h4>
                  </div>
                </Stack>
              </Link>
            );
          })}
        </Stack>
      </div>
    </div>
  );
};

export default Accomodation;
