import React from "react";
import { img13 } from "../../assets/images";

import { Accomodations } from "../../constants/complementdata";
import { Stack } from "@mui/material";
import "../component.css";
const Accomodation = () => {
 
  return (
    <div >
      <br />
      <h2 style={{ textAlign: "center", color: "orangered" }}>Accomodation</h2>
      <br />
      <Stack
        flexDirection={"row"}
        gap={3}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {Accomodations.map((e, i) => {
          const { text, img } = e;
          return (
            <Stack key={i} className="carding">
              <img src={img} alt="" />
              <Stack
                flexDirection={"row "}
                alignItems={"center"}
                justifyContent={"space-between"}
                p={2}
              >
                <h5>
                  ₹ 25,999.00 <br />
                  <span style={{ color: "orangered", fontSize: "16px" }}>
                    /per month
                  </span>
                </h5>
                <button className="bookcardbut">Book Now</button>
              </Stack>

              <div className="cardbanner">
                <h4>{text}</h4>
              </div>
            </Stack>
          );
        })}
      </Stack>
    </div>
  );
};

export default Accomodation;
