import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { musicCTX } from '../contexts/musicCTX';


const PlayListOptions = () => {
  let { play, changePlay, src } = useContext(musicCTX)
	const [isTurn, setIsTurn] = useState(play);
  const [age, setAge] = useState('');
  const [player, setPlayer] = useState(false)

  // useEffect(() => {
  //   let audio = document.querySelector('audio')
  //   player ? audio.player() : audio.pause()
  // }, [player])

  useEffect(()=> {
    setIsTurn(play)
  }, [play])

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (
    <div className="flex justify-between px-1 select-none">
      <div className="flex gap-6 items-center">
        <div className="flex items-center w-[55px] rounded-full h-[55px] bg-[#65D36E] cursor-pointerr justify-center" onClick={() => setPlayer(!player)}>
          {player ? <PauseIcon sx={{ width: "35px", height: '35px' }} /> : <PlayArrowIcon sx={{ width: "35px", height: '35px' }} />}

        </div>
        <div className="flex items-center gap-4">
          <img src="/img/LikePlaylist.png" className="w-[36px]" alt="" />
          <img src="/img/DownloadPlaylist.png" className="w-[36px]" alt="" />
          <img src="/img/OptionsPlaylist.png" className="w-[40px]" alt="" />
        </div>
      </div>
      <div className="flex items-center">
        <img src="/img/SearchPlaylist.png" className="w-[19px] mr-[20px]" alt="" />
        {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 150, background: 'transparent', border: 'none' }}>
          <InputLabel sx={{ color: '#fff' }} id="demo-simple-select-filled-label">Custom order</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> */}

        <p className='text-[#fff] text-[14px] font-medium'>Custom order</p>
      </div>
    </div>
  );
};

export default PlayListOptions;
