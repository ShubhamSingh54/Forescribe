import React from "react";

const Card3 = ({ icon, secondIcon, heading, desc,color }) => {
  return (
    <div className="my-[10px] w-[87%] h-[100px] bg-card-3 border-[1px] relative border-[#EFEFEF] rounded-[24px]">
      <div className="w-full h-full flex px-[30px] py-[25px]">
        <div className="flex items-center gap-[20px]">
        <div className={`w-[52px] opacity-70 h-[52px] rounded-[5px]  flex items-center justify-center object-contain `} 
            style={{
                background:color
            }}
            >
            <img src={icon} />
            </div>
          <div className="flex flex-col">
            <div className="text-[18px] opacity-70 text-[#19154E] flex gap-[10px] font-[500] ">
              {heading}
              
            </div>
            <div className="text-[#6B778C] opacity-70">{desc}</div>
          </div>
        </div>
        <div className="w-[130px]  h-full ml-auto flex items-center absolute right-[-17px] top-[10%]  ">
          <button className="w-full h-[40px] bg-[#FF8D15] relative text-white font-[500]  rounded-[5px] rounded-br-none">
            Comming soon
          </button>
          <div className=" absolute top-[10px] left-[-19px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.02631 20.5303C5.02111 19.9923 2.92174 19.7208 0.885213 19.4722C0.446576 19.42 0.0393315 19.7109 0.0080003 20.1208C-0.0546621 20.5309 0.258833 20.906 0.666139 20.9581C2.64 21.1975 4.67635 21.4537 6.58755 21.9717C6.99486 22.084 7.43368 21.8527 7.559 21.4549C7.68433 21.0573 7.43362 20.643 7.02631 20.5303Z"
                fill="#FF8D15"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.1042 12.9018C9.8771 9.75282 6.24268 7.00916 3.07823 3.77568C2.79625 3.47369 2.29495 3.45751 1.98164 3.73943C1.66833 4.02164 1.63712 4.49619 1.95043 4.79818C5.11488 8.04095 8.7493 10.7936 11.9764 13.9519C12.2897 14.2467 12.7909 14.2509 13.1042 13.9609C13.3862 13.6712 13.4175 13.1966 13.1042 12.9018Z"
                fill="#FF8D15"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.1519 0.78965C19.2459 2.59199 19.3397 4.39433 19.4337 6.19697C19.4337 6.6098 19.8098 6.92857 20.2485 6.90849C20.6871 6.88812 21.0002 6.5367 21.0002 6.12357C20.9062 4.31823 20.8124 2.5132 20.7184 0.70816C20.6871 0.295324 20.3111 -0.0213438 19.8724 0.00112551C19.4651 0.0235948 19.1206 0.377113 19.1519 0.78965Z"
                fill="#FF8D15"
              />
            </svg>
          </div>
          <div className=" absolute bottom-[18px] right-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
  <path d="M16 1L0 13V0L16 1Z" fill="#8E4900"/>
</svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
