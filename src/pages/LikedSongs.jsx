import { useEffect, useState } from "react";
import Playlist from "../components/Playlist";
import { useHttp } from "../hook/http.hook";

const LikedSongs = () => {
    const [liked, setLiked] = useState(true);

    useEffect(() => {
        let body = document.body;
        body.style.backgroundImage = 'linear-gradient(180deg, #604EC1 5.09%, #121212 43.28%)'
        body.style.backgroundRepeat = "no-repeat";
    }, [])

    return (
        <>
            <Playlist like={liked} />
        </>
    );
}

export default LikedSongs;