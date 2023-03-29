import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Audio } from  'react-loader-spinner'
import "./../style.scss"

const Songs = () => {
    return ( 
        <>
            <TableRow  className='body-row'>
              <TableCell component="th" scope="row"><Audio   height="28" width="28" /></TableCell>
              <TableCell align="right">
                <div className='flex'>
                    <img src="/images/Screenshot 2022-06-04 at 20.05.svg" alt="" />
                    <div>
                      <h6>Play It Safe</h6>
                      <p>Julia Wolf</p>
                    </div>
                </div>
              </TableCell>
              <TableCell align="right">Play It Safe</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">2 : 12</TableCell>
            </TableRow>

        </>
     );
}
 
export default Songs;