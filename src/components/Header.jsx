import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link , useLocation} from "react-router-dom";
import { searchCTX } from "../contexts/searchCTX";
import { tokenCTX } from "../contexts/tokenCTX";
import { useHttp } from "../hook/http.hook";

const Header = ({goBack, next}) => {
	const [user, setUser] = useState('')
	const {loading, error, request} = useHttp()
	const {setSearchResults} = useContext(searchCTX)
	const [show, setShow] = useState(false)
	const {pathname} = useLocation();

	window.onscroll = () => {
		let header = document.querySelector('header')
		let val = window.scrollY
		if(header) {
			if(val === 0) {
				header.style.background = `transparent`
			} else {
				header.style.background = `#000000${val * .3}`
			}
		}
	}
	
	useEffect(() => {
		request(`https://api.spotify.com/v1/me`)
			.then(res => setUser(res))
	}, [])
	
	const localClear = () => {
		localStorage.clear()
	}

	if(loading) {
		return <h1>loading...</h1>
	}

	if(error) {
		return <h1>Error something went wrong</h1>
	}

	return (
		<header className="w-[82%] h-[80px] fixed right-0 top-0 px-[2.3%] flex items-center duration-[200ms] justify-between z-10">
			<div className="flex items-center gap-[22px]">
				<img
					onClick={goBack}
					src="../../public/back.png"
					alt=""
					className="w-[32px] h-[32px] cursor-pointer duration-[500ms] hover:invert-[8%]"
				/>
				<img
					onClick={next}
					src="../../public/next.png"
					alt=""
					className="w-[32px] h-[32px] cursor-pointer duration-[500ms] hover:invert-[8%]"
				/>
				{pathname === '/search' ? (
					<div className="inpSearch w-[468px] h-[52px] items-center gap-[14px] px-[16px] bg-[#fff] cursor-pointer rounded-[26px] overflow-hidden">
						<img
							src="../../public/Search.png"
							alt=""
							className="w-[32px] h-[32px] cursor-pointer hover:invert-[8%]"
						/>
						<input type="text" name="search" placeholder="Artists, songs, or podcasts" className="inp" onKeyUp={(e) => setSearchResults(e.target.value)} />
					</div>
				) : null}
			</div>
			<div className="">
				<button onClick={() => setShow(!show)}
					id="dropdownAvatarNameButton"
					data-dropdown-toggle="dropdownAvatarName"
					className="flex bg-[#000000] py-[3px] pr-[12px] pl-[3px] items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 "
					type="button"
				>
					<span className="sr-only">Open user menu</span>
					<img
						src={user !== '' ? user?.images[0]?.url : '../../dava.png'}
						alt=""
						className="mr-2 w-[34px] h-[34px] rounded-full avatar_layout davaImg"
					/>
					<span className="text-[#fff] font-Manrope text-[18px] font-bold">
						{user.display_name}
					</span>
					<img
						src="../../public/open.png"
						alt=""
						className="w-[16px] h-[16px] ml-[11px]"
					/>
				</button>
				<div
					id="dropdownAvatarName"
					className="absolute z-10 w-44 rounded divide-y divide-gray-100 shadow bg-gray-700 divide-gray-600" style={{display: show ? 'block' : 'none'}}
				>
					<div className="py-3 px-4 text-sm text-gray-900 text-white">
						<div className="font-medium ">Pro User</div>
						<div className="truncate">name@flowbite.com</div>
					</div>
					<ul
						className="py-1 text-sm text-gray-700 text-gray-200"
						aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
					>
						<li>
							<a
								href="#"
								className="block py-2 px-4 text-white hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
							>
								Dashboard
							</a>
						</li>
						<li>
							<Link
								to={"/settings"}
								className="block py-2 text-white px-4 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
							>
								Settings
							</Link>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-4 text-white hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
							>
								Earnings
							</a>
						</li>
					</ul>
					<div className="py-1" onClick={localClear}>
						<p 
							className="block py-2 px-4 text-sm text-white hover:bg-gray-100 hover:bg-gray-600 text-gray-200 hover:text-white"
						>
							Sign out
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};




export default Header;
