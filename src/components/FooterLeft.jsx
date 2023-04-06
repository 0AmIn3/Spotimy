import { useContext, useState } from "react";
import {	musicInfoCTX } from '../contexts/musicInfoCTX'
import { openBigImgCTX } from "../contexts/openBigImgCTX";


const FooterLeft = () => {

   const {info} = useContext(musicInfoCTX)
   const {changeOpen, open} = useContext(openBigImgCTX)

   return ( 
      <div className="itemscenter absolute left-0 flex items-center gap-[22px] overflow-hidden">
               <div onClick={changeOpen} className="h-[72px] w-[72px] bg-contain bg-center bg-no-repeat cursor-pointer" style={{backgroundImage:  `url('${info.img}')`, display: open ? 'none' : 'block'}}></div>
               <div className="flex flex-col gap-[2px]">
                  <p className="text-[18px] font-Manrope text-[#fff]">{info.title}</p>
                  <p className="font-Manrope text-[#B3B3B3]">{info.artist}</p>
               </div>
            </div>
    );
}
 
export default FooterLeft;