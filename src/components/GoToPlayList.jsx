import React from "react";

const GoToPlayList = () => {
  return (
    <div className="w-[224px] h-[324px] px-[21px] hovercont cursor-pointer pt-5 pb-[18px] rounded-lg bg-[#1B1B1B] hover:bg-[#363335]">
      <div className="w-full h-[182px] relative">
        <img src="/img/pop.jpg" className="w-full" alt="" />
        <img src="/img/play.svg" className="w-[62px] absolute  playhover" alt="" />
      </div>
      <div className="text-white mt-[20px]">
        <h1 className=" text-xl font-bold">Pop Mix</h1>
        <p className="text-[#B3B3B3]  text-lg font-normal">Hey Violet, VÉRITÉ, Timeflies and more</p>
      </div>
    </div>
  );
};

export default GoToPlayList;
