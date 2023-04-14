import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import GoToPlayList from "../components/GoToPlayList";
import Items from "../components/Items";
import Musicblock from "../components/Musicblock";
import { myPlaylistCTX } from "../contexts/myPlaylistsCTX";
import { tokenCTX } from "../contexts/tokenCTX";
import { useHttp } from "../hook/http.hook";

const Home = () => {
	const token = useContext(tokenCTX);
	const [MyPlaylists, setMyPlaylists] = useState([]);
	const { setPlaylist } = useContext(myPlaylistCTX);
	const [myAlbom, setMyAlbom] = useState([]);
	const { loading, error, request } = useHttp();

	useEffect(() => {
		request("https://api.spotify.com/v1/me/playlists").then((res) => {
			setMyPlaylists(res.items);
			setPlaylist(res.items);
		});
	}, []);

	useEffect(() => {
		let body = document.body;
		body.style.backgroundImage =
			"linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)";
		body.style.backgroundRepeat = "no-repeat";
	}, []);

	useEffect(() => {
		request(
			"https://api.spotify.com/v1/browse/categories/toplists/playlists?country=UZ&offset=0&limit=5"
		).then((res) => {
			setMyAlbom(res.playlists.items);
		});
	}, []);

	if (loading) {
		return <Audio height="100" width="100" />;
	}

	return (
		<>
			<p className="font-bold text-[39px] text-[#fff] font-Manrope">
				Good afternoon
			</p>
			<div className="grid grid-cols-3 gap-x-[29px] gap-y-[16px] mt-[29px]">
				{MyPlaylists.map((item, inx) => (
					<Items
						key={inx}
						name={item.name}
						img={item?.images[0]?.url}
						id={item.id}
					/>
				))}
			</div>
			<p className="font-bold text-[30px] text-[#fff] font-Manrope mt-[50px] mb-[26px]">
				Your top mixes
			</p>
			<div className="flex flex-wrap gap-[30px]">
				{myAlbom.map((item, idx) => (
					<GoToPlayList item={item} key={idx} />
				))}
			</div>
			<p className="font-bold text-[30px] text-[#fff] font-Manrope mt-[50px] mb-[26px]">
				Made for you
			</p>
			<div className="flex flex-wrap gap-[30px]">
				{myAlbom.map((item, idx) => (
					<GoToPlayList item={item} key={idx} />
				))}
			</div>
		</>
	);
};

export default Home;
