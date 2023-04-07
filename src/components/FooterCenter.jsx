import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useContext, useEffect, useState } from 'react';
import { musicCTX } from '../contexts/musicCTX';
import Slider from '@mui/material/Slider';

const FooterCenter = () => {

   

   let {play, changePlay, src} = useContext(musicCTX)

   useEffect(() => {
      let audio = document.querySelector('audio')
      play ? audio.play() : audio.pause()
   }, [play, src])

   const [progress, setProgress] = useState(0)

   function uptadeProgress(element) {
	const {duration, currentTime} = element
	const progressPercent = (currentTime / duration) * 100
	setProgress(progressPercent)
   }

   function changeProgress(element) {
	let audio = document.querySelector('audio')
	const duration = audio.duration

	audio.currentTime = duration * element.value / 100
   }


   return ( 
      <div className="itemscenter2 flex flex-col items-center gap-[17px]">
               <div className="flex items-center gap-[33px]">
                  <div className="w-[21.2px] h-[18.6px] bg-no-repeat cursor-pointer bg-contain duration-[500ms] hover:invert-[30%]" style={{backgroundImage: "url('../../public/random.png')"}}></div>
                  <div className="w-[18px] h-[18px] bg-no-repeat cursor-pointer bg-contain duration-[500ms] hover:invert-[30%]" style={{backgroundImage: "url('../../public/prev.png')"}}></div>
                  <div className="w-[40px] rounded-full h-[40px] bg-[#fff] cursor-pointer flex items-center justify-center" onClick={() => changePlay()}>
                        {play ? <PauseIcon/> : <PlayArrowIcon/>}
                  </div>
                  <div className="w-[18px] h-[18px] bg-no-repeat cursor-pointer bg-contain duration-[500ms] hover:invert-[30%]" style={{backgroundImage: "url('../../public/nextsong.png')"}}></div>
                  <div className="w-[21.2px] h-[18.6px] bg-no-repeat cursor-pointer bg-contain duration-[500ms] hover:invert-[30%]" style={{backgroundImage: "url('../../public/restart.png')"}}></div>
               </div>
               {/* <div className="w-[550px] h-[5px] bg-[#B3B3B3] rounded-[5px] cursor-pointer">
                  <div className="w-[24%] h-full bg-[#fff]"></div>
               </div> */}
               <Slider
			onChange={(e) => changeProgress(e.target)}
        		size='medium'
			value={progress}
        		aria-label="medium"
			className='slider'
			sx={{width: '550px', height: '5px', color: '#fff'}}
      		/>
               <audio src={src} onTimeUpdate={(e) =>uptadeProgress(e.target)}></audio>
            </div>
    );
}
 
export default FooterCenter;