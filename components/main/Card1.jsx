import React from "react";

const Card1 = ({icon,secondIcon,heading, desc}) => {
  return (
    <div className="my-[10px] w-[85%] h-[100px] bg-card-1 border-[1px] border-[#EFEFEF] rounded-[24px]">
      <div className="w-full h-full flex px-[30px] py-[25px]">
        <div className="flex items-center gap-[20px]">
          <img src={icon} />
          <div className="flex flex-col">
            <div className="text-[18px] text-[#19154E] flex gap-[10px] font-[500] ">
              {heading}
              <img src={secondIcon} alt="as" />
            </div>
            <div className="text-[#6B778C]">
              {
                desc
              }
            </div>
          </div>
        </div>
        <div className="w-[107px] h-full ml-auto flex items-center ">
            <button className="w-full h-[40px] bg-[#8B3DFF] text-white font-[500]  rounded-[5px]">
                Connect
            </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
