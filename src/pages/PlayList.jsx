import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import List from "../components/List";
import Playlist from "../components/Playlist";
import PlayListOptions from "../components/PlayListOptions";
import SearchTracks from "../components/SearchTracks";
import { useHttp } from "../hook/http.hook";
import { reloadPlaylistsCTX } from "../contexts/reloadPlaylistsCTX";
import { getAverageRGB } from "../hook/getImageColor";
import { bgColorCTX } from "../contexts/bgColorCTX";

const PlayList = () => {
	const [tracks, setTracks] = useState([]);
	const [name, setName] = useState([]);
	const [img, setImg] = useState([]);
	// const [reload, setReload] = useState(0);
	const { id } = useParams();
	const { state } = useLocation();
	const { loading, error, request } = useHttp();
	const { reloadPlaylists } = useContext(reloadPlaylistsCTX);
	const { bg } = useContext(bgColorCTX);
    const [playlistId, setPlaylistId] = useState('')

	useEffect(() => {
		request(`https://api.spotify.com/v1/playlists/${id}/tracks`).then(
			(res) => {
				setTracks(res?.items);
			}
		);
		request(`https://api.spotify.com/v1/playlists/${id}`).then((res) => {
			setName(res.name);
			setImg(res?.images[0]?.url);
		});
        setPlaylistId(id)
		let body = document.body;
		body.style.background = '#121212'
	}, [reloadPlaylists]);
	return (
		<>
			<Playlist img={state?.img || img} item={tracks} name={name} />
			<PlayListOptions id={id}/>
			<List arr={tracks} />
			<SearchTracks />
		</>
	);
};

export default PlayList;
