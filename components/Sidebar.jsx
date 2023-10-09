import React from "react";
import SidebarCard from "./SidebarCard";
import ActiveSidebar from "./ActiveSidebar";

const data = [
  {
    img: "/images/application.svg",
    name: "Applications",
  },
  {
    img: "/images/Renewals.svg",
    name: "Renewals",
  },
  {
    img: "/images/Transaction.svg",
    name: "Transactions",
  },
  {
    img: "/images/Employees.svg",
    name: "Employees",
  },
];

const Sidebar = () => {
  return (
    <div className=" fixed top-0 left-0 w-[280px] border-r-[2px] border-[#EFEFEF] hidebar ">
      <div className="overflow-y-scroll w-full h-screen hidebar    pt-[18px] pb-[70px]">
        {/* logo section */}
        <div className=" flex items-center justify-center">
          <img
            src="\images\Logo.svg"
            className="w-[142px] h-[34px] mb-[20px]"
          />
        </div>
        <div className="w-full h-[1.5px] bg-[#EFEFEF]" />
        {/* menu */}
        <div className="mt-[40px]">
          <SidebarCard icon="\images\insights.svg.svg" name="Insights" />
          <p className=" ml-[30px] uppercase text-[#8B91A9] text-[13px] ">
            menu{" "}
          </p>
          <div className="mt-[30px]">
            {data.map((item, index) => {
              return (
                <SidebarCard key={index} icon={item.img} name={item.name} />
              );
            })}
          </div>
          <p className=" ml-[30px] uppercase text-[#8B91A9] text-[13px] ">
            setting{" "}
          </p>
          {/*  second menu */}
          <div className="mt-[20px] pb-[250px]">
            <ActiveSidebar icon="\images\Union.svg" name="Integrations" />
            <SidebarCard icon="\images\account.svg" name="Accounts" />
          </div>
          <div className="w-full h-[1.5px] bg-[#EFEFEF]" />
          <div className="w-full mb-[15px] mx-auto max-w-[260px] h-[80px] pl-[20px]  flex items-center gap-[10px]">
            <div className=" w-[32px] h-[32px] bg-[#8B3DFF] flex items-center justify-center rounded-[3px]  ">
              <img src="\images\profile.svg" className="w-[16px] h-[16px]" />
            </div>
            <div className="flex flex-col gap-[-2px]">
              <p className="font-[400] text-[1rem]">Webex Starship</p>
              <p className=" text-[#3F4C5A] text-[12px] ">charlie@webex.com</p>
            </div>
            <div className=" ml-[40px] flex items-center justify-center">
                <img src="\images\ultateer.svg" className="w-[10px] h-[5px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
