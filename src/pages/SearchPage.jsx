import React, { useContext, useEffect, useState } from "react";
import Artict from "../components/Artict";
import Genres from "../components/Genres";
import GenresMini from "../components/GenresMini";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { searchCTX } from "../contexts/searchCTX";
import axios from 'axios'
import { tokenCTX } from "../contexts/tokenCTX";
const SearchPage = () => {
	// console.log(hr);
	// setHref('/search')
	const {search} = useContext(searchCTX)
	const token = useContext(tokenCTX)
	const [data, setData] = useState([])

	useEffect(() => {

	if(search.length > 0) {
		axios.get(`https://api.spotify.com/v1/search?query=${search}&type=track&include_external=audio&market=UZ&locale=ru-RU%2Cru%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&offset=5&limit=10`, {
			headers: {Authorization: `Bearer ${token}`}
		})
		.then(res => setData(res.data.tracks.items))
		console.log(data);
	}
	}, [search])

	useEffect(() => {
		let body = document.body
		body.style.background = '#070707'
	})
	return (
		<div className="">
			{search.length !== 0 ? (
				<>
				<p className="font-bold text-[30px] text-[#fff] font-Manrope mt-[50px] mb-[26px]">
				Best result
			</p>
				<div className="flex gap-[30px] items-start">
				<div className="w-[38%] flex flex-col gap-[50px] hovercontwo relative h-[297.5px] bg-[#1B1B1B] rounded-lg hover:bg-[#363335]">
				<img src="/img/play.svg" className="w-[92px] absolute playhovertwo" alt="" />
				<div className="w-[125px] h-[125px] shadowbox rounded-full bg-contain bg-center bg-no-repeat" style={{backgroundImage: `url("${data[0]?.album.images[1].url}")`}}></div>
				<p className="font-bold leading-[0px] text-[35px] text-[#fff] font-Manrope">
				{data[0]?.name}
				</p>
				<p className="text-[#B3B3B3] text-lg font-normal">{data[0]?.artists[0].name}</p>
				</div>
				<div className="w-[60%] bg-[red] h-[5px]"></div>
				</div>
				</>
			) : (
				<>
				<div className="flex flex-col gap-7">
				<h1 className=" text-3xl text-white font-bold">
					Recent searches
				</h1>
				<div className="flex gap-8">
					<Artict />
					<Artict />
				</div>
			</div>
			<div className="flex flex-col gap-7 mt-[70px]">
				<h1 className=" text-3xl text-white font-bold">
					Your top genres
				</h1>
				<div className="flex gap-[30px] ">
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={50}
						slidesPerView={2.5}
						navigation
						// pagination={{ clickable: true }}
						// scrollbar={{ draggable: true }}
						onSwiper={(swiper) => swiper}
						onSlideChange={() => "slide change"}
					>
						<SwiperSlide>
							{" "}
							<Genres />
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<Genres />
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<Genres />
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<Genres />
						</SwiperSlide>

						<SwiperSlide>
							{" "}
							<Genres />
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<Genres />
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<Genres />
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<Genres />
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<Genres />
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<Genres />
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<Genres />
						</SwiperSlide>
						<SwiperSlide>
							{" "}
							<Genres />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
			<div className="flex flex-col gap-7 mt-[70px]">
				<h1 className=" text-3xl text-white font-bold">Browse all</h1>
				<div className="grid gap-7 grid-cols-4 ">
					<GenresMini />
					<GenresMini />
					<GenresMini />
					<GenresMini />
					<GenresMini />
					<GenresMini />
					<GenresMini />
					<GenresMini />
				</div>
			</div>
				</>
			)}
		</div>
	);
};

export default SearchPage;
