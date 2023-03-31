import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import List from "../components/List";
import Playlist from "../components/Playlist";
import PlayListOptions from "../components/PlayListOptions";
import { tokenCTX } from "../contexts/tokenCTX";

const PlayList = () => {
    const [tracks, setTracks] = useState([])
    const {id} = useParams()

    const token = useContext(tokenCTX)

    useEffect(() => {
        
        axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks`,{
            headers: {Authorization: `Bearer ${token}`}
        })
        .then(res => setTracks(res?.data?.items))

        // temporary //
        let body = document.body
        body.style.backgroundImage = 'linear-gradient(180deg, #A34284 5.09%, #121212 43.28%)'
        body.style.backgroundRepeat = 'no-repeat'
        // temporary //
    }, [])
    
    return (
        <>
            <Playlist />
            <PlayListOptions />
            <List arr={tracks} />
        </>
    );
}

export default PlayList;