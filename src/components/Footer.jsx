import { useContext } from "react";
import { musicInfoCTX } from "../contexts/musicInfoCTX";
import { openBigImgCTX } from "../contexts/openBigImgCTX";
import FooterCenter from "./FooterCenter";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
      const {info} = useContext(musicInfoCTX)
      const {changeOpen, open} = useContext(openBigImgCTX)
   return ( 
      <footer className="w-full z-[20] fixed bottom-0 left-0 bg-[#181818] h-[92px] px-[18px]">
            <div className="relative w-full h-[92px]">
            <div className="h-[320px] w-[320px] top-[-320px] justify-end pt-[10px] pr-[10px] left-[-16px] absolute bg-cover cursor-pointer" style={{backgroundImage:  `url('${info.imgbig}')`, display: open ? 'flex' : 'none'}}>
                  <div className="w-[30px] h-[30px] bg-cover cursor-pointer float-right" onClick={changeOpen} style={{backgroundImage:  "url('../../public/bottomopen.png')"}}></div>
               </div>
            <FooterLeft/>
            <FooterCenter/>
            <FooterRight/>
            </div>
      </footer>
    );
}
 
export default Footer;