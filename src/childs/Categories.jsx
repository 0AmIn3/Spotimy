import React from "react";
import { BsPlayCircleFill } from "react-icons/bs";

const Categories = ({ item }) => {
  return (
    <div className="w-[224px] forTr h-[324px] select-none cursor-pointer forHv ease-in hover:bg-[#2a2a2a] pl-[20px] pr-[20px] pt-[20px] bg-[#1B1B1B] rounded-[8px]">
      <div
        style={{
          backgroundImage: `url(${item?.img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "5px",
        }}
        className="w-full h-[65%]"
      >
        <div className="float-right hidden relative pt-[137px] pr-[8px] forHv2   z-10 justify-end items-end">
          <BsPlayCircleFill
            size={"50px"}
            color="#1ed760"
            className="playIcon"
          />
        </div>
      </div>
      <div className="w-full pt-[5px] h-[35%]">
        <p className="font-bold text-[#FFF] text-[22px]">{item?.name}</p>
        <p className="font-[450] text-[18px] text-[#B3B3B3] pt-[8px] ">
          {item?.desc}
        </p>
      </div>

    </div>
  );
};

export default Categories;
