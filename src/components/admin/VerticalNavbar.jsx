import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ClassIcon from "@mui/icons-material/Class";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BedIcon from "@mui/icons-material/Bed";
import "rsuite/dist/rsuite.min.css";
import {RoomFilter} from "../../features/filterSlice";

import { DateRangePicker } from "rsuite";
const VerticalNavbar = () => {

  const dispatch = useDispatch();


  const handleFileter = (data ) => {
    dispatch(RoomFilter(data));
  }
    return (
      <div className="sticky top-0">
        <div className="bg-[#3020a1f5]   h-[110vh] p-4">
          <Link to={"/"}>
            <h1 className="text-white text-2xl">Noida PG</h1>
          </Link>

          <div className="flex flex-col  mt-6 text-md  text-white">
            <Link to={"/admin/Dashboard"}>
              <p className="flex items-center bg-[#5245ad] p-2 rounded-md  mb-2 gap-2">
                <HomeIcon /> Dashboard
              </p>
            </Link>
            <Link to={"/admin/userbooking"}>
              <p className="flex items-center bg-[#5245ad] p-2 rounded-md  mb-2 gap-2">
                <ClassIcon /> Booking
              </p>
            </Link>
            <Link to={"/admin/contact"}>
              <p className="flex items-center bg-[#5245ad] p-2 rounded-md mb-2 gap-2">
                <PermContactCalendarIcon /> Contact
              </p>
            </Link>
          </div>
          <hr className="text-white mb-2 mt-2" />
          <p className=" text-lg  text-white p-2 rounded-md items-center">
            Filter by Date
          </p>
          <DateRangePicker />
          <div className="flex flex-col  mt-3 text-md text-white">
            <p
              onClick={() => handleFileter("single")}
              className=" flex  cursor-pointer   bg-[#5245ad] p-2 rounded-md items-center  mb-1 gap-2"
            >
              <SingleBedIcon /> SINGLE OCCUPANCY
            </p>

            <p
              onClick={() => handleFileter("double")}
              className="flex  cursor-pointer  bg-[#5245ad] p-2 rounded-md items-center  mb-1 gap-2"
            >
              <BedIcon /> DOUBLE OCCUPANCY
            </p>

            <p
              onClick={() => handleFileter("triple")}
              className="flex cursor-pointer  bg-[#5245ad] p-2 rounded-md items-center  mb-1 gap-2"
            >
              <SingleBedIcon /> TRIPLE OCCUPANCY
            </p>
          </div>
        </div>
      </div>
    );
};

export default VerticalNavbar;
