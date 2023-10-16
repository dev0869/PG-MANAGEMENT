import React from "react";
import ProjectsStats from "./data";
import { Briefcase, ListTask, People, Bullseye } from "react-bootstrap-icons";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchDetails } from "../../../features/bookingSlice";

const Card = ({ data, contact }) => {
  const datas = data;
  const single = datas.filter((ele) => ele.room === "single");
  const double = datas.filter((ele) => ele.room === "double");

  const triple = datas.filter((ele) => ele.room === 'triple');
  const ProjectsStats = [
    {
      id: 1,
      title: "Booking",
      value: `${data.length}`,
      icon: <Briefcase size={18} />,
      statInfo: '<span className="text-dark me-2">2</span> Completed',
    },
    {
      id: 2,
      title: "Contact",
      value: `${contact.length}`,
      icon: <ListTask size={18} />,
      statInfo: '<span className="text-dark me-2">28</span> Completed',
    },
    {
      id: 3,
      title: "SINGLE OCCUPANCY",
      value: `${single.length}`,
      icon: <People size={18} />,
      statInfo: '<span className="text-dark me-2">1</span> Completed',
    },
    {
      id: 4,
      title: "DOUBLE OCCUPANCY",
      value: `${double.length}`,
      icon: <Bullseye size={18} />,
      statInfo: '<span className="text-dark me-2">5%</span> Completed',
    },
    {
      id: 5,
      title: "TRIPLE OCCUPANCY",
      value: `${triple.length}`,
      icon: <Bullseye size={18} />,
      statInfo: '<span className="text-dark me-2">5%</span> Completed',
    },
  ];

  return (
    <>
      {ProjectsStats.map((ele, id) => {
        return (
          <div
            key={id}
            className="w-[250px] shadow-lg  p-3   rounded-lg bg-white"
          >
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold text-gray-700">{ele.title}</p>
              <p className="bg-[#E0DCFE] p-2" style={{ color: "#624bff" }}>
                {ele.icon}
              </p>
            </div>
            <p className="text-4xl mt-3 mb-3 text-gray-800 font-semibold">
              {ele.value}
            </p>
          </div>
        );
      })}
    </>
  );
};

const Dashboard = () => {
   const dispatch = useDispatch();
   const data = useSelector((st) => st.booking.user);
   const contact = useSelector((st) => st.booking.contact);

   useEffect(() => {
     dispatch(fetchDetails());
   }, []);
  return (
    <div className="bg-[#624BFF] h-[280px] ">
      <div className="flex  flex-wrap justify-center gap-3 relative top-[20px] p-6">
        <Card data={data} contact={contact} />
      </div>
    </div>
  );
};

export default Dashboard;
