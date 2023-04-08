import { useContext, useState } from "react";
import {	musicInfoCTX } from '../contexts/musicInfoCTX'
import { openBigImgCTX } from "../contexts/openBigImgCTX";


const FooterLeft = () => {

   const {info} = useContext(musicInfoCTX)
   const {changeOpen, open} = useContext(openBigImgCTX)

   return ( 
      <div className="itemscenter absolute left-0 flex items-center gap-[14px] overflow-hidden">
               <div onClick={changeOpen} className="h-[56px] w-[56px] bg-contain bg-center bg-no-repeat cursor-pointer" style={{backgroundImage:  `url('${info.img}')`, display: open ? 'none' : 'block'}}></div>
               <div className="flex flex-col gap-[2px]">
                  <p className="text-[15px] font-semibold font-Manrope text-[#fff]">{info.title}</p>
                  <p className="text-[12px] font-Manrope text-[#B3B3B3]">{info.artist}</p>
               </div>
            </div>
    );
}
 
export default FooterLeft;