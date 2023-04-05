import axios from "axios";
import { useContext, useEffect, useState } from "react";
import GoToPlayList from "../components/GoToPlayList";
import Items from "../components/Items";
import { tokenCTX } from "../contexts/tokenCTX";

const Home = () => {
	const token = useContext(tokenCTX);
	const [MyPlaylists, setMyPlaylists] = useState([]);

	useEffect(() => {
		axios
			.get(`https://api.spotify.com/v1/users/31l55634sskmacncqzfimb573d34`, {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => console.log(res));
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
