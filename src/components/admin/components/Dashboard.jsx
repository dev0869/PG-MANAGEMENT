import React from "react";
import ProjectsStats from "./data";

const Card = () => {
  return (
    <>
      {ProjectsStats.map((ele) => {
        return (
          <div className="w-[250px] shadow-lg  p-3 rounded-lg bg-white">
            <div className="flex justify-between">
              <p className="text-xl font-semibold text-gray-700">{ele.title}</p>
              <p className="bg-[#E0DCFE] p-2" style={{ color: "#624bff" }}>
                {ele.icon}
              </p>
            </div>
            <p className="text-4xl mt-3 text-gray-800 font-semibold">
              {ele.value}
            </p>
          </div>
        );
      })}
    </>
  );
};

const Dashboard = () => {
  return (
    <div className="bg-[#624BFF]">
      <p className="pl-4 relative top-9 text-2xl font-semibold text-white">
        Total Users
      </p>
      <div className="flex  flex-wrap justify-between relative top-[50px] p-6">
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
