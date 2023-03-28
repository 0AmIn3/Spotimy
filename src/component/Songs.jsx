import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Audio } from  'react-loader-spinner'

const Songs = () => {
    return ( 
        <>
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"></TableCell>
              <TableCell align="right">hfhfh</TableCell>
              <TableCell align="right">fgf</TableCell>
              <TableCell align="right">ffghfgh</TableCell>
              <TableCell align="right">fghfhfghgfhgfhgfgh</TableCell>
            </TableRow>

        </>
     );
}
 
export default Songs;