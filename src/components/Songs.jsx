import { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Audio } from 'react-loader-spinner'
import "./../style.scss"



const Songs = ({ item }) => {

  const [isTurn, setIsTurn] = useState(false)

  return (
    <>
      <TableRow onClick={() => setIsTurn(!isTurn)} className='body-row'>
        <TableCell component="th" scope="row">{isTurn ? <Audio height="28" width="28" /> : item.id}</TableCell>
        <TableCell align="left">
          <div className='flex'>
            <img className='pr-4' src={item.albomImg} alt="" />
            <div>
              <h6 className={`${isTurn ? "text-[#65D36E]" : "text-[#fff]"}`} >{item.name}</h6>
              <p>{item.singer}</p>
            </div>
          </div>
        </TableCell>
        <TableCell align="left">{item.name}</TableCell>
        <TableCell align="left"></TableCell>
        <TableCell align="center">{item.time}</TableCell>
      </TableRow>

    </>
  );
}

export default Songs;