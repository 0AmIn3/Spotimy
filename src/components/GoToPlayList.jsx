import React from "react";
import { Link, useNavigate } from "react-router-dom";

const GoToPlayList = ({ item }) => {
  return (

    <Link to={`/playlist/${item?.id}`} >
      <div className="w-[224px] h-[324px] px-[21px] hovercont cursor-pointer pt-5 pb-[18px] rounded-lg bg-[#1B1B1B] hover:bg-[#363335]">
        <div className="w-full h-[182px] relative">
          <img src={item?.images[0]?.url} className="w-full" alt="" />
          <img src="/img/play.svg" className="w-[62px] absolute playhover" alt="" />
        </div>
        <div className="text-white mt-[20px]">
          <h1 className="text-[18px] font-bold">{item?.name}</h1>
          <p className="text-[#B3B3B3]  text-[14px] font-normal">{item?.description}</p>
        </div>
      </div>
    </Link>


  );
};

export default GoToPlayList;
