import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const FooterCenter = () => {
   return ( 
      <div className="flex flex-col items-center gap-[17px]">
               <div className="flex items-center gap-[33px]">
                  <div className="w-[21.2px] h-[18.6px] bg-no-repeat cursor-pointer bg-contain duration-[500ms] hover:invert-[30%]" style={{backgroundImage: "url('../../public/random.png')"}}></div>
                  <div className="w-[18px] h-[18px] bg-no-repeat cursor-pointer bg-contain duration-[500ms] hover:invert-[30%]" style={{backgroundImage: "url('../../public/prev.png')"}}></div>
                  <div className="w-[40px] rounded-full h-[40px] bg-[#fff] cursor-pointer flex items-center justify-center">
                        <PauseIcon/>
                  </div>
                  <div className="w-[18px] h-[18px] bg-no-repeat cursor-pointer bg-contain duration-[500ms] hover:invert-[30%]" style={{backgroundImage: "url('../../public/nextsong.png')"}}></div>
                  <div className="w-[21.2px] h-[18.6px] bg-no-repeat cursor-pointer bg-contain duration-[500ms] hover:invert-[30%]" style={{backgroundImage: "url('../../public/restart.png')"}}></div>
               </div>
               <div className="w-[550px] h-[5px] bg-[#B3B3B3] rounded-[5px] cursor-pointer">
                  <div className="w-[24%] h-full bg-[#fff]"></div>
               </div>
            </div>
    );
}
 
export default FooterCenter;