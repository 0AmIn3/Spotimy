import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import List from "../components/List";
import Playlist from "../components/Playlist";
import PlayListOptions from "../components/PlayListOptions";
import SearchTracks from "../components/SearchTracks";
import { useHttp } from "../hook/http.hook";
import { reloadPlaylistsCTX } from "../contexts/reloadPlaylistsCTX";

const PlayList = () => {

  const [tracks, setTracks] = useState([]);
  const [name, setName] = useState([]);
  // const [reload, setReload] = useState(0);
  const { id } = useParams();
  const { state } = useLocation();
  const { loading, error, request } = useHttp()
  const reloadPlaylistsy  = useContext(reloadPlaylistsCTX)
  // const aa = useContext(reloadPlaylistsCTX)

  useEffect(() => {
    request(`https://api.spotify.com/v1/playlists/${id}/tracks`)
    .then((res) => {
      setTracks(res?.items);  
    });
    request(`https://api.spotify.com/v1/playlists/${id}`)
    .then((res) => {
      setName(res.name) 
    });

    // temporary //
    let body = document.body;
    body.style.backgroundImage =
      "linear-gradient(180deg, #A34284 5.09%, #121212 43.28%)";
    body.style.backgroundRepeat = "no-repeat";
    // temporary //

  }, [reloadPlaylistsy]);
  return (
    <>
      <Playlist img={state?.img} item={tracks} name={name}  />
      <PlayListOptions />
      <List arr={tracks} />
      <SearchTracks />
    </>
  );
};

export default PlayList;
