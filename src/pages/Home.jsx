import axios from "axios";
import { useContext, useEffect, useState } from "react";
import GoToPlayList from "../components/GoToPlayList";
import Items from "../components/Items";
import Musicblock from "../components/Musicblock";
import { tokenCTX } from "../contexts/tokenCTX";

const Home = () => {
	const token = useContext(tokenCTX);
	const [MyPlaylists, setMyPlaylists] = useState([]);

	useEffect(() => {
		axios
			.get(`https://api.spotify.com/v1/me/playlists`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => setMyPlaylists(res.data.items));
	}, []);

	useEffect(() => {
		let body = document.body;
		body.style.backgroundImage =
			"linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)";
		body.style.backgroundRepeat = "no-repeat";
	}, []);


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
				<GoToPlayList />
				<GoToPlayList />
				<GoToPlayList />
				<GoToPlayList />
				<GoToPlayList />
			</div>
			<p className="font-bold text-[30px] text-[#fff] font-Manrope mt-[50px] mb-[26px]">
				Made for you
			</p>
			<div className="flex flex-wrap gap-[30px]">
				<GoToPlayList />
				<GoToPlayList />
				<GoToPlayList />
				<GoToPlayList />
				<GoToPlayList />
			</div>
		</>
	);
};

export default Home;
