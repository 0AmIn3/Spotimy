import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const GenresCard = () => {
    return (

        <>

            <Swiper navigation={false} modules={[Navigation]} className="mySwiper">

                <SwiperSlide>
                    <div className="px-20">
                        <div className="w-full h-[220px] bg-[#876AA7] flex justify-between rounded-[14px] overflow-hidden ">
                            <p className="ml-[15px] text-[50px] font-bold">Pop</p>
                            <img className=" mt-[90px] w-[130px] h-[130px]" src="/images/popImg.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-20">
                        <div className="w-full h-[220px] bg-[#876AA7] flex justify-between rounded-[14px] overflow-hidden ">
                            <p className="ml-[15px] text-[50px] font-bold">Pop</p>
                            <img className=" mt-[90px] w-[130px] h-[130px]" src="/images/popImg.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-20">
                        <div className="w-full h-[220px] bg-[#876AA7] flex justify-between rounded-[14px] overflow-hidden ">
                            <p className="ml-[15px] text-[50px] font-bold">Pop</p>
                            <img className=" mt-[90px] w-[130px] h-[130px]" src="/images/popImg.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>




        </>



    );
}

export default GenresCard;