import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ClassIcon from "@mui/icons-material/Class";
import { Link } from "react-router-dom";
const VerticalNavbar = () => {
  return (
    <>
      <div className="bg-[#212B36]  h-[100vh] p-4">
        <Link to={"/"}>
          <h1 className="text-white text-2xl">Logo</h1>
        </Link>

        <div className="flex flex-col  mt-6 text-md font-semibold text-white">
          <Link to={"/admin/Dashboard"}>
            <p className="flex items-center  mb-3 gap-2">
              <HomeIcon fontSize="50%" /> Dashboard
            </p>
          </Link>
          <Link to={"/admin/userbooking"}>
            <p className="flex items-center  mb-3 gap-2">
              <ClassIcon fontSize="50%" /> UserBooking
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default VerticalNavbar;
