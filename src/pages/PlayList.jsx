import { useEffect } from "react";
import List from "../components/List";
import Playlist from "../components/Playlist";
import PlayListOptions from "../components/PlayListOptions";

const PlayList = () => {

    useEffect(() => {
        let body = document.body
        if (location.pathname === '/playlist') {
            body.style.backgroundImage = 'linear-gradient(180deg, #A34284 5.09%, #121212 43.28%)'
            body.style.backgroundRepeat = 'no-repeat'
        }
    }, [])
    
    return (
        <>

            <Playlist />
            <PlayListOptions />
            <List />
        </>
    );
}

export default PlayList;