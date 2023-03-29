import React, { useEffect } from "react";
import Artict from "../components/Artict";
import Genres from "../components/Genres";
import GenresMini from "../components/GenresMini";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const SearchPage = () => {
	// console.log(hr);
	// setHref('/search')
	return (
		<div className="">
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
		</div>
	);
};

export default SearchPage;
