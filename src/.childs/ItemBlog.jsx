import React from "react";

const ItemBlog = () => {
  return (
    <center>
      <div
        className="w-[224px] rounded-[8px] hover:bg-[#e0e0e0] shadow-[20px 20px 60px #a1a1a1,
            -20px -20px 60px #ffffff;]  h-[224px]  bg-[#27856A]"
      >
        <div className="w-full pl-[10px] h-[20%]">
          <p className="font-[700] text-start text-[30px] text-[#FFFF]">
            Podcasts
          </p>
        </div>

        <div className="w-full flex items-end justify-end h-[80%] ]">
          <img src="/src/assets/zaraza.svg" alt="" />
        </div>
      </div>
    </center>
  );
};

export default ItemBlog;
