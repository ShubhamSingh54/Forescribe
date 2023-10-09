import React from 'react';

const SidebarCard = ({icon,name}) => {
    return (
        <div className='w-full mb-[15px] mx-auto max-w-[260px] h-[50px] pl-[20px]  flex items-center gap-[10px]'>
            <img 
            src={icon}
            className='w-[18px] h-[18px] '
            />
            <p className='text-[1rem]  font-[400] text-[#19154E] '>{name}</p>
        </div>
    );
}

export default SidebarCard;
