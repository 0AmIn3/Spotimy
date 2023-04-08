import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import List from "../components/List";
import Playlist from "../components/Playlist";
import PlayListOptions from "../components/PlayListOptions";
import { tokenCTX } from "../contexts/tokenCTX";
import SearchTracks from "../components/SearchTracks";
import { useHttp } from "../hook/http.hook";

const PlayList = () => {

  const [tracks, setTracks] = useState([]);
  const { id } = useParams();
  const { state } = useLocation();
  const { loading, error, request } = useHttp()


  useEffect(() => {
    request(`https://api.spotify.com/v1/playlists/${id}/tracks`)
    .then((res) => {
      setTracks(res?.items);
    });

    // temporary //
    let body = document.body;
    body.style.backgroundImage =
      "linear-gradient(180deg, #A34284 5.09%, #121212 43.28%)";
    body.style.backgroundRepeat = "no-repeat";
    // temporary //
  }, []);

  return (
    <>
      <Playlist img={state?.img} />
      <PlayListOptions />
      <List arr={tracks} />
      <SearchTracks />
    </>
  );
};

export default PlayList;
