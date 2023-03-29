import {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Songs from './Songs';
import "./../style.scss"

const player = [
  {
    name: "Play It Safe",
    singer: "Julia Wolf",
    time: "2 : 12",
    albomImg: "./images/1.svg"
  },
  {
    name: "Ocean Front Apt.",
    singer: "ayokay",
    time: "2 : 12",
    albomImg: "./images/2.svg"
  },
  {
    name: "Free Spirit",
    singer: "Khalid",
    time: "3 : 02",
    albomImg: "./images/3.svg"
  },
  {
    name: "Remind You",
    singer: "FRENSHIP",
    time: "4 : 25",
    albomImg: "./images/4.svg"
  },
  {
    name: "Play It Safe",
    singer: "Julia Wolf",
    time: "2 : 12",
    albomImg: "./images/1.svg"
  },
  {
    name: "Ocean Front Apt.",
    singer: "ayokay",
    time: "2 : 12",
    albomImg: "./images/2.svg"
  },
  {
    name: "Free Spirit",
    singer: "Khalid",
    time: "3 : 02",
    albomImg: "./images/3.svg"
  },
  {
    name: "Remind You",
    singer: "FRENSHIP",
    time: "4 : 25",
    albomImg: "./images/4.svg"
  },
  {
    name: "Play It Safe",
    singer: "Julia Wolf",
    time: "2 : 12",
    albomImg: "./images/1.svg"
  },
  {
    name: "Ocean Front Apt.",
    singer: "ayokay",
    time: "2 : 12",
    albomImg: "./images/2.svg"
  },
  {
    name: "Free Spirit",
    singer: "Khalid",
    time: "3 : 02",
    albomImg: "./images/3.svg"
  },
  {
    name: "Remind You",
    singer: "FRENSHIP",
    time: "4 : 25",
    albomImg: "./images/4.svg"
  }

]

console.log(player);

export default function List() {

  const [data, setData] = useState(player)

  return (
    <div >
    <TableContainer  className='table-bg px-8 ' component={Paper}>
      <Table className=''>
        <TableHead className='px-2 '>
          <TableRow className='head-row'>
            <TableCell className='text-[22px]'>#</TableCell>
            <TableCell align='left'>TITLE</TableCell>
            <TableCell align="left">ALBUM</TableCell>
            <TableCell align="left">DATE ADDED</TableCell>
            <TableCell align="right"><img className='' src="/images/clock.svg" alt="" /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='px-2'>

          {
              data.map(item => <Songs item={item}/>)

          }
            
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}