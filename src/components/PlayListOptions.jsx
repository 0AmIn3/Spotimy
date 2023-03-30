import * as React from 'react';
import { useEffect, useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const PlayListOptions = () => {

  const [age, setAge] = React.useState('');



  const [play, setPlay] = useState(false)

  useEffect(() => {
    let audio = document.querySelector('audio')
    play ? audio.play() : audio.pause()
  }, [play])

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (
    <div className="flex justify-between px-2 select-none">
      <div className=" flex gap-10 items-center">
        <div className="flex items-center w-[70px] rounded-full h-[70px] bg-[#65D36E] cursor-pointer flex items-center justify-center" onClick={() => setPlay(!play)}>
          {play ? <PauseIcon sx={{ width: "40px", height: '40px' }} /> : <PlayArrowIcon sx={{ width: "40px", height: '40px' }} />}

        </div>
        <div className="flex items-center gap-9">
          <img src="/img/LikePlaylist.png" className="w-[52px]" alt="" />
          <img src="/img/DownloadPlaylist.png" className="w-[52px]" alt="" />
          <img src="/img/OptionsPlaylist.png" className="w-[44px]" alt="" />
        </div>
      </div>
      <div className="flex items-center">
        <img src="/img/SearchPlaylist.png" className="w-[25px] mr-[50px]" alt="" />
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

        <p className='text-[#fff] text-[18px] font-medium'>Custom order</p>
      </div>
    </div>
  );
};

export default PlayListOptions;
