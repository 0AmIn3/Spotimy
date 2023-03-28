import React from "react";

const PlayListOptions = () => {
  return (
    <div className=" flex justify-between">
      <div className=" flex gap-10 items-center">
        <div className="flex items-center">
          <img src="/img/play.svg" className="w-[72px]" alt="" />
        </div>
        <div className="flex items-center gap-9">
          <img src="/img/LikePlaylist.png" className="w-[52px]" alt="" />
          <img src="/img/DownloadPlaylist.png" className="w-[52px]" alt="" />
          <img src="/img/OptionsPlaylist.png" className="w-[44px]" alt="" />
        </div>
      </div>
      <div className="flex items-center">
        <img src="/img/SearchPlaylist.png" className="w-[23px]" alt="" />
        <select name="" id="">
          Custom order
        </select>
      </div>
    </div>
  );
};

export default PlayListOptions;
