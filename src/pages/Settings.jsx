import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#1DB954',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#535353' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const Settings = () => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([])
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    }
    useEffect(() => {
      let body = document.body
      body.style.background = "#121212"
    })
    return ( 
        <div className="w-full bg-[#121212] p-[20px] w-[90%] mb-[120px]">
            <div className="w-[100%] flex justify-between mb-[30px]">
                <p className='text-white text-[26px] font-bold'>Настройки</p>
            </div>
            <div className="flex flex-col gap-[25px]">
            <div className="w-[100%] flex justify-between items-end">
                <div className="flex flex-col gap-[15px]">
                    <p className='text-white text-[23px] font-bold'>Язык</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Выбери язык. Изменения вступят в силу после перезапуска приложения</p>
                </div>
                <div>
      <FormControl sx={{ width: 300, height: '40px', backgroundColor: "#333333", borderRadius: "5px" }}>
        <Select
        sx={{color: '#ffffff90', width: 300, height: '40px', fontSize: "14px", fontStyle: "normal", backgroundColor: "#333333"}}
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Русский</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="" >
            <em>Русский</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem sx={{height: '40px', color: '#ffffff90', backgroundColor: "#333333",}}
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
            </div>
            <div className="w-[100%] flex justify-between items-end">
                <div className="flex flex-col gap-[15px]">
                    <p className='text-white text-[23px] font-bold'>Контент для взрослых (Explicit)</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Разрешить контент с пометкой Explicit</p>
                </div>
                <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/>
            </div>
            <div className="w-[100%] flex justify-between items-end">
                <div className="flex flex-col gap-[15px]">
                    <p className='text-white text-[23px] font-bold'>Музыка нон-стоп</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Никаких перерывов. Включать похожий контент, когда мое аудио закончится.</p>
                </div>
                <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/>
            </div>
            <div className="w-[100%] flex justify-between items-end">
                <div className="flex flex-col gap-[15px]">
                    <p className='text-white text-[23px] font-bold'>Качество звука</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Качетсво стриминга</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Скачать</p>
                </div>
                <div className='flex flex-col gap-[5px]'>
      <FormControl sx={{ width: 150, height: '35px', backgroundColor: "#333333", borderRadius: "5px" }}>
        <Select
        sx={{color: '#ffffff90', width: 150, height: '35px', fontSize: "14px", fontStyle: "normal", backgroundColor: "#333333"}}
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Высоко</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="" >
            <em>Высоко</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem sx={{height: '35px', color: '#ffffff90', backgroundColor: "#333333",}}
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: 150, height: '35px', backgroundColor: "#333333", borderRadius: "5px" }}>
        <Select
        sx={{color: '#ffffff90', width: 150, height: '35px', fontSize: "14px", fontStyle: "normal", backgroundColor: "#333333"}}
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Высоко</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="" >
            <em>Высоко</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem sx={{height: '35px', color: '#ffffff90', backgroundColor: "#333333",}}
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
            </div>
            <div className="w-[100%] flex justify-between items-center">
                <div className="flex flex-col gap-[15px]">
                    <p className="text-[#ffffff90] text-[14.5px]">Автонастройка качества звука (советуем включить)</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Установить одну громкость для всех треков</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                <FormControlLabel control={<IOSSwitch defaultChecked />}/>
                <FormControlLabel control={<IOSSwitch defaultChecked />}/>
                </div>
            </div>
            <div className="w-[100%] flex justify-between items-end">
                    <p className="text-[#ffffff90] text-[14.5px] w-[500px]">Настрой уровень громкости в зависимости шума вокруг. Качество звука останется неизменным в режимах "Нормально" и "Тихо",но может ухудшиться в режиме "Громко".</p>

      <FormControl sx={{ width: 150, height: '35px', backgroundColor: "#333333", borderRadius: "5px" }}>
        <Select
        sx={{color: '#ffffff90', width: 150, height: '35px', fontSize: "14px", fontStyle: "normal", backgroundColor: "#333333"}}
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Нормально</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="" >
            <em>Нормально</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem sx={{height: '35px', color: '#ffffff90', backgroundColor: "#333333",}}
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
            </div>
            <div className="w-[100%] flex justify-between items-end">
                <div className="flex flex-col gap-[15px]">
                    <p className='text-white text-[23px] font-bold'>Файлы на устройстве</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Показывать файлы на устройстве</p>
                </div>
                <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />}/>
            </div>
            <div className="w-[100%] flex justify-between items-end">
                <div className="flex flex-col gap-[15px]">
                    <p className='text-white text-[23px] font-bold'>Вид</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Узнай, что слушают твои друзья</p>
                </div>
                <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} />}/>
            </div>
            <p className='text-white text-[23px] font-bold'>Приватность</p>
            <div className="w-[100%] flex justify-between items-center">
                <div className="flex flex-col gap-[15px]">
                    <p className="text-[#ffffff90] text-[14.5px]">Публиковать новые плейлисты в своем профиле</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Включить приватный режим, чтобы слушать контент анонимно</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Показывать что я слушаю в Spotify</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Показывать раздел "Недавно прослушано" в открытом профиле.</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                <FormControlLabel control={<IOSSwitch defaultChecked />}/>
                <FormControlLabel control={<IOSSwitch/>}/>
                <FormControlLabel control={<IOSSwitch/>}/>
                <FormControlLabel control={<IOSSwitch/>}/>
                </div>
            </div>
            <p className='text-white text-[23px] font-bold'>Воспроизведение</p>
            <div className="w-[100%] flex justify-between items-center">
                <div className="flex flex-col gap-[15px]">
                    <p className="text-[#ffffff90] text-[14.5px]">Плавный переход между треками</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Автомикс: включи плавные переходы между треками в ряде плейлистов</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Монозвук - одинаковое воспроизведение звука в правом и левом динамике</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Эквалайзер</p>
                </div>
                <div className="flex flex-col gap-[10px]">
                <FormControlLabel control={<IOSSwitch/>}/>
                <FormControlLabel control={<IOSSwitch defaultChecked/>}/>
                <FormControlLabel control={<IOSSwitch/>}/>
                <FormControlLabel control={<IOSSwitch defaultChecked/>}/>
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Settings;