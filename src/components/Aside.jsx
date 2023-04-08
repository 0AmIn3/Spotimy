import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { myPlaylistCTX } from "../contexts/myPlaylistsCTX";

const Aside = () => {
	const { playlist } = useContext(myPlaylistCTX);
	// const navigate = useNavigate();

	return (
		<aside className="w-[18%] h-full  flex flex-col gap-[20px] px-[30px] pt-[55px] bg-[#000000] fixed left-0 bottom-0">
			<section className="flex flex-col gap-[22px] mb-[44px]">
				<NavLink
					to={"/"}
					className="flex items-center gap-[21px] cursor-pointer"
				>
					<div className="w-[30px] h-[30px] bg-contain bg-no-repeat bg-center homeLogo"></div>
					<p className="font-Manrope font-bold text-[16px] text-[#B3B3B3] duration-500 hover:text-[#fff]">
						Home
					</p>
				</NavLink>
				<NavLink
					to={"/search"}
					className="flex items-center gap-[21px] cursor-pointer"
				>
					<div className="w-[30px] h-[30px] bg-contain bg-no-repeat bg-center searchLogo"></div>
					<p className="font-bold font-Manrope text-[16px] text-[#B3B3B3] duration-500 hover:text-[#fff]">
						Search
					</p>
				</NavLink>
				<NavLink
					to={"/library"}
					className="flex items-center gap-[21px] cursor-pointer"
				>
					<div className="w-[30px] h-[30px] bg-contain bg-no-repeat bg-center libraryLogo"></div>
					<p className="font-bold font-Manrope text-[16px] text-[#B3B3B3] duration-500 hover:text-[#fff]">
						Your Library
					</p>
				</NavLink>
			</section>
			<section className="flex flex-col gap-[24px]">
				<NavLink
					to={"/create"}
					className="flex items-center gap-[21px] cursor-pointer"
				>
					<div className="w-[30px] h-[30px] bg-contain bg-no-repeat bg-center plusLogo"></div>
					<p className="font-bold font-Manrope text-[16px] text-[#B3B3B3] duration-500 hover:text-[#fff]">
						Create Playlist
					</p>
				</NavLink>
				<NavLink
					to={"/liked"}
					className="flex items-center gap-[21px] cursor-pointer"
				>
					<div className="w-[30px] h-[30px] bg-contain bg-no-repeat bg-center likedLogo"></div>
					<p className="font-bold font-Manrope text-[16px] text-[#B3B3B3] duration-500 hover:text-[#fff]">
						Liked Songs
					</p>
				</NavLink>
			</section>
			<div className="line my-[16px]"></div>
			<section className="flex flex-col gap-[16px]">
				{playlist.map((item, idx) => (
					<Link
						to={`/playlist/${item.id}`}
						key={item.id}
						state={item?.images[0]?.url}
						className="font-[500] font-Manrope text-[16px] text-[#B3B3B3] cursor-pointer duration-500 hover:text-[#fff6"
					>
						{item.name}
					</Link>
				))}
			</section>
		</aside>
	);
};

export default Aside;
