import React from 'react';

const ActiveSidebar = ({icon,name}) => {
    return (
        <div className='w-full relative rounded-[5px] bg-[#efe4ff] mb-[15px] mx-auto max-w-[260px] h-[50px] pl-[20px]  flex items-center gap-[10px]'>
            <img 
            src={icon}
            className='w-[18px] h-[18px] text-[500] '
            />
            <p className='text-[1rem]  font-[500] text-[#8B3DFF]'>{name}</p>
            <div className=' w-[4px] h-[30px]  rounded-[4px] absolute top-[10px] left-0 bg-[#8B3DFF] '/>
        </div>
    );
}

export default ActiveSidebar;
 