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
		let body = document.body;
		body.style.background = `linear-gradient(180deg, ${bg} 5.09%, #121212 43.28%)`;
	}, [reloadPlaylists]);
	return (
		<>
			<Playlist img={state?.img || img} item={tracks} name={name} />
			<PlayListOptions />
			<List arr={tracks} />
			<SearchTracks />
		</>
	);
};

export default PlayList;
