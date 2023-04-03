import { useContext, useState } from "react";
import {	musicInfoCTX } from '../contexts/musicInfoCTX'


const FooterLeft = () => {

   const [open, setOpen] = useState(false)
   const {info} = useContext(musicInfoCTX)
   console.log(info);

   return ( 
      <div className="flex items-center gap-[22px] relative">
               <div onClick={() => setOpen(true)} className="h-[72px] w-[72px] bg-cover cursor-pointer" style={{backgroundImage:  "url('../../public/img.png')", display: open ? 'none' : 'block'}}></div>
               <div className="h-[320px] w-[320px] top-[-330px] justify-end pt-[10px] pr-[10px] left-[-16px] absolute bg-cover cursor-pointer" style={{backgroundImage:  `url('${info.img}')`, display: open ? 'flex' : 'none'}}>
                  <div onClick={() => setOpen(false)} className="w-[30px] h-[30px] bg-cover cursor-pointer" style={{backgroundImage:  "url('../../public/bottomopen.png')"}}></div>
               </div>
               <div className="flex flex-col gap-[2px]">
                  <p className="text-[18px] font-Manrope text-[#fff]">{info.title}</p>
                  <p className="font-Manrope text-[#B3B3B3]">{info.artist}</p>
               </div>
            </div>
    );
}
 
export default FooterLeft;