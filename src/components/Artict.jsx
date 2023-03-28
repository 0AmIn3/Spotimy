import React from "react";

const Artict = () => {
  return (
    <div className="w-[224px] h-[324px] px-[21px] hovercont relative  pt-5 pb-[18px] rounded-lg bg-[#1B1B1B] hover:bg-[#363335]">
      <div className="w-full h-[182px] relative">
        <img src="/img/artist.png" className="w-full" alt="" />
        <img src="/img/play.svg" className="w-[62px] absolute  playhover" alt="" />
      </div>
      <div className="text-white mt-[20px]">
        <h1 className=" text-xl font-bold">Ed Sheeran</h1>
        <p className="text-[#B3B3B3]  text-lg font-normal">Artist</p>
      </div>
      <img src="/img/Close.png" className=" absolute top-[12px] right-[12px]" alt="" />
    </div>
  );
};

export default Artict;
