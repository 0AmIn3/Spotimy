import { useContext, useEffect, useState } from 'react'; 
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Audio } from  'react-loader-spinner'
import "./../style.scss"
import { musicCTX } from '../contexts/musicCTX';



const Songs = ({item, arr}) => {

    const [isTurn , setIsTurn] = useState(false)
    const {changeSrc, changeId, changePlay, changePlayTrue, id} = useContext(musicCTX)

    
    // let time = item.duration_ms
    // let data = new Date(time)

    // let minutes = data.getMinutes()
    
    // console.log(data)
    // {isTurn ? <Audio height="28" width="28" /> : arr.indexOf(item) + 1}

    // useEffect(() => {
    //     let rows = document.querySelectorAll('.row')

    //     arr.filter(item => {
    //       if(item.id === id) {
    //         console.log(rows);
    //       }
    //     })
    // }, [id])

    return ( 
              <TableRow onClick={() => {
              changeSrc(item.preview_url),
              changeId(item.id)
              changePlayTrue()
            }} className='body-row'>
              <TableCell component="th" scope="row"><p className="count">{arr.indexOf(item) + 1}</p>
              </TableCell>
              <TableCell align="left">
                <div className='flex'>
                    <img className='pr-4' src={item?.album.images[2].url} alt="" />
                    <div>
                      <h6>{item.name}</h6>
                      <p>{item?.artists[0].name}</p>
                    </div>
                </div>
              </TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>

     );
}
 
export default Songs;