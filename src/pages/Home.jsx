import { useContext, useEffect } from "react";
import GoToPlayList from "../components/GoToPlayList";
import Items from "../components/Items";
import Musicblock from "../components/Musicblock";

const Home = () => {

   useEffect(() => {
		let body = document.body
      body.style.backgroundImage = 'linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)'
      body.style.backgroundRepeat = 'no-repeat'
	}, [])

	return (
		<>
			<p className="font-bold text-[39px] text-[#fff] font-Manrope">
				Good afternoon
			</p>
			<div className="grid grid-cols-3 gap-x-[29px] gap-y-[16px] mt-[29px]">
				<Items />
				<Items />
				<Items />
				<Items />
				<Items />
				<Items />
			</div>
			<p className="font-bold text-[30px] text-[#fff] font-Manrope mt-[50px] mb-[26px]">
				Your top mixes
			</p>
			<div className="secondgrid">
				<GoToPlayList />
				<GoToPlayList />
				<GoToPlayList />
				<GoToPlayList />
				<GoToPlayList />
			</div>
			<p className="font-bold text-[30px] text-[#fff] font-Manrope mt-[50px] mb-[26px]">
				Made for you
			</p>
			<div className="secondgrid">
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
