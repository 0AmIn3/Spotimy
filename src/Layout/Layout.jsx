import { createContext, useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { searchCTX } from "../contexts/searchCTX";
import { spotify } from "../contexts/spotifyCTX";
import { tokenCTX } from "../contexts/tokenCTX";
import { musicCTX } from "../contexts/musicCTX";
import { musicInfoCTX } from "../contexts/musicInfoCTX";
import { openBigImgCTX } from "../contexts/openBigImgCTX";
import { myPlaylistCTX } from "../contexts/myPlaylistsCTX";
import { reloadPlaylistsCTX } from "../contexts/reloadPlaylistsCTX";
import { bgColorCTX } from "../contexts/bgColorCTX";
import {nextMusicCTX} from '../contexts/nextMusicCTX'
import {prevMusicCTX} from '../contexts/prevMusicCTX'
import {musicIndexCTX} from '../contexts/musicIndexCTX'
import spotifyLogo from "../../public/images/Black_Spotify_logo_with_text.svg"

const Layout = () => {
	const [token, setToken] = useState("");
	const [search, setSearch] = useState("");
	const [play, setPlay] = useState(false);
	const [nextMusic, setNextMusic] = useState(false)
	const [prevMusic, setPrevMusic] = useState(false)
	const [bg, setBg] = useState("");
	const [id, setId] = useState("");
	const [src, setSrc] = useState("");
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(0)
	const [reloadPlaylists, setReloadPlaylists] = useState(true);
	const [info, setInfo] = useState({
		img: "https://i.scdn.co/image/ab67616d000048512a3e79f1348f62bfe6063314",
		imgbig: "https://i.scdn.co/image/ab67616d000048512a3e79f1348f62bfe6063314",
		title: "Play It Safe",
		artist: "Julia Wolf",
	});

	const navigate = useNavigate();
	const changePrevMusic = () => {
		setPrevMusic(!prevMusic)
	};
	const changeNextMusic = () => {
		setNextMusic(!nextMusic)
	};
	const goBack = () => {
		navigate(-1);
	};
	const next = () => {
		navigate(1);
	};
	const Setreload = () => {
    setReloadPlaylists(!reloadPlaylists)
	};
	const changeOpen = () => {
		setOpen(!open);
	};
	const changePlay = () => {
		setPlay(!play);
	};
	const changePlayTrue = () => {
		setPlay(true);
	};
	const changeId = (id) => {
		setId(id);
	};
	const changeSrc = (src) => {
		setSrc(src);
	};

  const changeInfo = (songimg, songimgbig, songtitle, songartist) => {
    setInfo({
      img: songimg,
      imgbig: songimgbig,
      title: songtitle,
      artist: songartist,
    });
  };

  let setSearchResults = (text) => {
    let uptadeText = text.toLowerCase().trim();
    setSearch(uptadeText);
  };
  const [playlist, setPlaylist] = useState([]);
  const { client_id, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE } =
    useContext(spotify);

  useEffect(() => {
    const hash = window.location.hash;
    let localedTOKEN = window.localStorage.getItem("token");

    if (!localedTOKEN && hash) {
      localedTOKEN = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.href = "";
      window.localStorage.setItem("token", localedTOKEN);
    }

    setToken(localedTOKEN);
  }, []);

  if (!token) {
    return (
		<div className="bg-[#ffffff]">
			<div className="pt-[25px] ">
				<div className="flex justify-center"><img className=" w-[145px] mb-[20px]" src={spotifyLogo} alt="" /></div>
				<div className="line"></div>				
			</div>
			<div className="flex justify-center mt-[40px]">
				<div className="log-in">
					<h3 className="text-black font-bold mb-[10px]">To continue,log in to Spotify.</h3>
					<ul className="grid gap-[10px]">
						<li className="" >
							<button className="w-[450px] h-[50px] rounded-[500px] bg-[#1877f2] text-[#ffffff] font-bold">CONTINUE WITH FACEBOOK</button>
						</li>
						<li className="" >
							<button className="w-[450px] h-[50px] rounded-[500px] bg-[#000000e6] text-[#ffffff] font-bold">CONTINUE WITH APPLE</button>
						</li>
						<li className="" >
							<button className="w-[450px] h-[50px] rounded-[500px] bg-[#ffffff] text-[#6a6a6a] font-bold border-2 border-neutral-600">CONTINUE WITH GOOGLE</button>
						</li>
						<li>
						<a className="flex justify-center" href={`${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public`} >
				        <button className="bg-[#65d46e] rounded-[500px] h-[48px] w-[120px] font-bold">LOG IN </button></a>	
						</li>
					</ul>
				</div>
			</div>
		</div>
    );
  }

	return (
		<tokenCTX.Provider value={token}>
			<searchCTX.Provider value={{ setSearchResults, search }}>
				<musicCTX.Provider
					value={{
						changePlay, 
						changeId,
						changeSrc,
						changePlayTrue,
						play,
						id,
						src,
					}}
				>
					<musicInfoCTX.Provider value={{ changeInfo, info }}>
						<openBigImgCTX.Provider value={{ changeOpen, open }}>
							<myPlaylistCTX.Provider
								value={{ setPlaylist, playlist }}
							>
								<reloadPlaylistsCTX.Provider
									value={{ Setreload, reloadPlaylists }}
								>
									<bgColorCTX.Provider value={{ setBg, bg }}>
										<nextMusicCTX.Provider value={{changeNextMusic, nextMusic}}>
										<prevMusicCTX.Provider value={{changePrevMusic, prevMusic}}>
											<musicIndexCTX.Provider value={{setIndex, index}} >
											<div className="flex relative">
											<Aside />
											<div className="w-[77.2%] relative ml-[20.2%] ">
												<Header
													goBack={goBack}
													next={next}
												/>
												<main className="mt-[110px] mb-[150px] min-h-[100vh]">
													<Outlet />
												</main>
												<Footer />
											</div>
										</div>
											</musicIndexCTX.Provider>
										</prevMusicCTX.Provider>
										</nextMusicCTX.Provider>
									</bgColorCTX.Provider>
								</reloadPlaylistsCTX.Provider>
							</myPlaylistCTX.Provider>
						</openBigImgCTX.Provider>
					</musicInfoCTX.Provider>
				</musicCTX.Provider>
			</searchCTX.Provider>
		</tokenCTX.Provider>
	);
};

export default Layout;
