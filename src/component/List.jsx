import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Songs from './Songs';
import "./../style.scss"


export default function List() {
  return (
    <div className='max-w-[80%]'>
    <TableContainer className='px-8' component={Paper}>
      <Table >
        <TableHead className='px-2'>
          <TableRow className='head-row'>
            <TableCell>#</TableCell>
            <TableCell>TITLE</TableCell>
            <TableCell align="right">ALBUM</TableCell>
            <TableCell align="right">DATE ADDED</TableCell>
            <TableCell align="right"><img src="/images/clock.svg" alt="" /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='px-2'>
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
            <Songs />
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}