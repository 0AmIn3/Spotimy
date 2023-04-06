import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { useEffect, useState } from 'react';


const FooterRight = () => {

   const [value, setValue] = useState(100);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
   let audio = document.querySelector('audio')
   audio.volume = value === 100 ? '1' : `0.${value}`
}, [value])

   return ( 
      <div className="itemscenter absolute right-0 flex items-center gap-[14px]">
         <div className="w-[32px] h-[32px] bg-contain bg-no-repeat cursor-pointer duration-[500ms] hover:invert-[30%]" style={{backgroundImage: "url('../../Queue.png')"}}></div>
         <div className="w-[32px] h-[32px] bg-contain bg-no-repeat cursor-pointer duration-[500ms] hover:invert-[30%]" style={{backgroundImage: "url('../../Devices.png')"}}></div>
         <Stack spacing={2} direction="row" sx={{ width: '200px' }} alignItems="center">
         <VolumeDown sx={{filter: 'invert(70%)', width: '25px', height: '25px'}}/>
         <Slider aria-label="Volume" value={value} onChange={handleChange}  sx={{color: 'white'}}/>
         <VolumeUp sx={{filter: 'invert(70%)', width: '25px', height: '25px'}}/>
         </Stack>
      </div>
    );
}
 
export default FooterRight;