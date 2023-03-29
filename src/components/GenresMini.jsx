import React from 'react';

const GenresMini = () => {
    return (
        <div className=' w-[240px] bg-[#876AA7]  min-w-[240px]  h-[240px] relative p-[21px] rounded-[14px] overflow-hidden'>
           <p className="ml-[15px] text-[50px] font-bold text-[white]">Pop</p>
            <img className=" mt-[90px] w-[130px] h-[130px] absolute bottom-0 right-0" src="/img/art1.png" alt="" />
        </div>
    );
};

export default GenresMini;