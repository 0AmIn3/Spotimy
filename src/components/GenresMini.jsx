import React from 'react';

const GenresMini = ({item, rondomColor}) => {
    
    return (
        <div className='w-[240px] bg-[#37315B]  min-w-[240px]  h-[240px] relative p-[21px] rounded-[14px] overflow-hidden'>
           <p className="ml-[15px] text-[30px] font-semibold text-[white]">{item?.name}</p>
            <img className="mt-[90px]  w-[120px] h-[120px] absolute  bottom-[-20px] right-[-20px] rotate-[30deg]" src={item?.icons[0]?.url} alt="" />
        </div>
    );
};

export default GenresMini;