import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Songs from './Songs';


export default function List() {
  return (
    <div className='max-w-[80%] flex place-content-end'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell># TITLE</TableCell>
            <TableCell align="right">ALBUM</TableCell>
            <TableCell align="right">DATE ADDED</TableCell>
            <TableCell align="right"><img src="/images/clock.svg" alt="" /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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