import { Stack } from "@mui/material";
import { Complementdata } from "../../constants/complementdata";
import './index.css'
import "../component.css";
import Amenities from "./Amenities/Amenities";
import Accomodation from "./Accomodation";

const Complimentary = () => {
  return (
    <div style={{ padding: "24px" }}>
      <Accomodation />

      <svg
        style={{
          position: "absolute",
          left: "-12%",
          width: "25%",
          zIndex: " 1",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="540"
        height="535"
        viewBox="0 0 540 535"
        fill="none"
      >
        <path
          d="M252.403 1.72765C108.239 14.3404 97.3309 62.8813 14.2332 285.875C-68.8645 508.868 233.171 545.266 377.334 532.653C521.496 520.04 548.922 384.519 536.296 240.2C523.67 95.8813 396.566 -10.885 252.403 1.72765Z"
          fill="#FFF8F0"
        />
      </svg>
      <svg className="svv"
        style={{
          position: "absolute",
          right: "-8%",
          width: "30%",
          bottom: "-275%",
          zIndex: " 1",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="566"
        height="566"
        viewBox="0 0 566 566"
        fill="none"
      >
        <path
          d="M546.057 173.398C595.553 309.387 556.168 339.788 389.177 509.345C222.185 678.902 61.5493 420.546 12.0541 284.56C-37.441 148.573 73.7975 66.4402 209.937 16.8893C346.077 -32.6616 496.562 37.4106 546.057 173.398Z"
          fill="#FFF8F0"
        />
      </svg>
      <h1
        className="text-4xl md:text-3xl m-3 md:m-0  advancetext mb-8"
        style={{ textAlign: "center", fontWeight: "bold" }}
      >
        Complimentary Benefits
      </h1>
      <br />
      <p className="w-[100%] z-[999] md:w-[50%] text-lg font-semibold text-gray-800  flex justify-center mx-auto text-justify md:text-center">
        The listed services are offered to all our customers. We assure you the
        best deals in all our properties and the chance to live a more luxurious
        life with lesser cost.
      </p>
      <br />
      <br />
      <Stack
        zIndex={999}
        position={"relative"}
        style={{ textAlign: "center" }}
        gap={2}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        {Complementdata.map((e, i) => {
          const { text, img } = e;
          return (
            <div
              className="complementarybox  flex  items-center flex-col bg-white justify-center gap-4"
              key={i}
            >
              <img src={img} alt="" />
              <p>{text}</p>
            </div>
          );
        })}
      </Stack>

      <Amenities />
    </div>
  );
};

export default Complimentary;
