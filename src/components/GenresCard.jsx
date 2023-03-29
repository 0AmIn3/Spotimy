import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const GenresCard = () => {
    return (

        <div className="px-20 w-full flex gap-[20px]">

            {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide > */}

            <div className="w-full min-w-[450px] bg-[#876AA7] flex justify-between rounded-[14px] overflow-hidden ">
                <p className="ml-[15px] text-[50px] font-bold text-[white]">Pop</p>
                <img className=" mt-[90px] w-[130px] h-[130px]" src="/images/popImg.png" alt="" />
            </div>

            {/* </SwiperSlide>
            </Swiper> */}

        </div>
    );
}

export default GenresCard;