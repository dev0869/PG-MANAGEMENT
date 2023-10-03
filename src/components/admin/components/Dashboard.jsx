import React from "react";
import ProjectsStats from "./data";

const Card = () => {
  return (
    <>
      {ProjectsStats.map((ele,id) => {
        return (
          <div key={id} className="w-[250px] shadow-lg  p-3   rounded-lg bg-white">
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
  return (
    <div className="bg-[#624BFF] h-[280px] ">
    
      <div className="flex  flex-wrap justify-center gap-3 relative top-[20px] p-6">
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
