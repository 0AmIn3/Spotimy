import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useContext, useEffect, useState } from "react";
import { musicCTX } from "../contexts/musicCTX";
import Slider from "@mui/material/Slider";
import { nextMusicCTX } from "../contexts/nextMusicCTX";
import { prevMusicCTX } from "../contexts/prevMusicCTX";

const FooterCenter = () => {
   const {changeNextMusic, nextMusic} = useContext(nextMusicCTX)
   const {changePrevMusic, prevMusic} = useContext(prevMusicCTX)
	let { play, changePlay, src } = useContext(musicCTX);
	
	let calculateTime = (secs) => {
		let minutes = Math.floor(secs / 60);
		let seconds = Math.floor(secs % 60);
		let returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${minutes}:${returnedSeconds}`;
	}
	useEffect(() => {
		let audio = document.querySelector("audio");
		play ? audio.play() && calculateTime(audio.duration) : audio.pause();
	}, [play, src]);

	const [progress, setProgress] = useState(0);

	function uptadeProgress(element) {
		const { duration, currentTime } = element;
      if(duration) {
         const progressPercent = (currentTime / duration) * 100;
         setProgress(progressPercent);
      }
	}

	function changeProgress(element) {
		let audio = document.querySelector("audio");
		const duration = audio.duration;

		audio.currentTime = (duration * element.value) / 100;
	}

	return (
		<div className="itemscenter2 flex flex-col items-center">
			<div className="flex items-center gap-[25px]">
				<div
					className="w-[17.2px] h-[14.6px] bg-no-repeat cursor-pointer bg-contain duration-[500ms] hover:invert-[30%]"
					style={{
						backgroundImage: "url('../../public/random.png')",
					}}
				></div>
				<div onClick={changePrevMusic}
					className="w-[14px] h-[14px] bg-no-repeat cursor-pointer bg-contain duration-[500ms] hover:invert-[30%]"
					style={{ backgroundImage: "url('../../public/prev.png')" }}
				></div>
				<div
					className="w-[35px] rounded-full h-[35px] bg-[#fff] cursor-pointer flex items-center justify-center"
					onClick={() => changePlay()}
				>
					{play ? <PauseIcon /> : <PlayArrowIcon />}
				</div>
				<div onClick={changeNextMusic}
					className="w-[14px] h-[14px] bg-no-repeat cursor-pointer bg-contain duration-[500ms] hover:invert-[30%]"
					style={{
						backgroundImage: "url('../../public/nextsong.png')",
					}}
				></div>
				<div
					className="w-[17.2px] h-[14.6px] bg-no-repeat cursor-pointer bg-contain duration-[500ms] hover:invert-[30%]"
					style={{
						backgroundImage: "url('../../public/restart.png')",
					}}
				></div>
			</div>
			<Slider
				onChange={(e) => changeProgress(e.target)}
				size="medium"
				value={progress}
				aria-label="medium"
				className="slider"
				sx={{ width: "550px", height: "5px", color: "#fff" }}
			/>
			<audio
        onEnded={changeNextMusic}
				src={src}
				onTimeUpdate={(e) => uptadeProgress(e.target)}
			></audio>
		</div>
	);
};

export default FooterCenter;
