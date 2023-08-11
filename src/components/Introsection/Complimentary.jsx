import React from "react";
import { Stack } from "@mui/material";
import { Complementdata } from "../../constants/complementdata";
import "../component.css";
import Amenities from "./Amenities/Amenities";
import Accomodation from "./Accomodation";
const Complimentary = () => {
  return (
    <div style={{ padding: "24px" }} id="services">
      <br />
      <Accomodation />
      <br />
      <br />
      <br />

      <h2
        className="anim-center-title"
        style={{ textAlign: "center", color: "#FF4500" }}
      >
        Complimentary Benefits
      </h2>

      <br />
      <br />
      <Stack
        style={{ textAlign: "center" }}
        gap={2}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {Complementdata.map((e, i) => {
          const { text, img } = e;
          return (
            <Stack alignItems={"center"} className="complementarybox" key={i}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "8px",
                  objectFit: "cover",
                }}
              >
                <img src={img} alt="" />
              </div>
              <p>{text}</p>
            </Stack>
          );
        })}
      </Stack>
      <br />

      <Amenities />
    </div>
  );
};

export default Complimentary;
