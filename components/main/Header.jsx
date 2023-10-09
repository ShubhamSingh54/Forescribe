import React from "react";

const Header = () => {
  return (
    <div className="h-[73px] border-b-[2px] border-[#EFEFEF] flex">
      <div className="ml-[20px] h-full justify-center items-center flex w-[30px]">
        <img
          src="\images\leftarrow.svg"
          className="w-[24px] h-[24px]"
          alt="as"
        />
      </div>
      {/*  input  */}
      <div className="w-[40%] ml-[20px] h-full flex items-center">
        <div className=" w-full h-[44px]  relative ">
          <input
            className="w-full h-full bg-[#F5F5F5] rounded-[3px] text-[#2C3652] pl-[50px] "
            value="Search by employee or application"
          />
          <div className=" absolute top-[15px] left-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.8314 1.25581C4.78559 1.25581 1.50581 4.53559 1.50581 8.5814C1.50581 12.6272 4.78559 15.907 8.8314 15.907C12.8772 15.907 16.157 12.6272 16.157 8.5814C16.157 4.53559 12.8772 1.25581 8.8314 1.25581ZM0.25 8.5814C0.25 3.84202 4.09202 0 8.8314 0C13.5708 0 17.4128 3.84202 17.4128 8.5814C17.4128 10.7251 16.6268 12.6852 15.3272 14.1892L18.0661 16.9281C18.3113 17.1733 18.3113 17.5709 18.0661 17.8161C17.8209 18.0613 17.4233 18.0613 17.1781 17.8161L14.4392 15.0772C12.9352 16.3768 10.9751 17.1628 8.8314 17.1628C4.09202 17.1628 0.25 13.3208 0.25 8.5814Z"
                fill="#3F4C5A"
              />
            </svg>
          </div>
        </div>
      </div>
      {/*  last div */}
      <div className=" ml-auto  h-full flex items-center   w-[200px]">
        <div className=" w-full h-[40px] px-[20px] bg-[#F6F0FF]  rounded-[5px] gap-[15px] flex items-center  py-[8px]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
            >
              <path
                d="M14 8C16.2091 8 18 6.20914 18 4C18 1.79086 16.2091 0 14 0C11.7909 0 10 1.79086 10 4C10 6.20914 11.7909 8 14 8Z"
                fill="#8B3DFF"
              />
              <path
                d="M14 10C7.9 10 6 14 6 14V16H22V14C22 14 20.1 10 14 10Z"
                fill="#8B3DFF"
              />
              <path
                d="M4 3V11"
                stroke="#8B3DFF"
                stroke-width="2"
                stroke-miterlimit="10"
              />
              <path
                d="M8 7H0"
                stroke="#8B3DFF"
                stroke-width="2"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
          <p className="text-[#8B3DFF]">Invite members</p>
        </div>
      </div>
      <div className="w-[60px] h-full flex items-center justify-center">
        <img 
        src="\images\bell.svg"
        className="w-[22px] h-[22px]"
        />
      </div>
      <div className="w-[100px] h-full flex items-center gap-[10px] ">
            <img 
            src="\images\avatar.svg"
            className="w-[38px] h-[38px]"
            />
            <img 
            src="\images\ultateer.svg"
            className="w-[10px] h-[5px]"
            />
      </div>
    </div>
  );
};

export default Header;
