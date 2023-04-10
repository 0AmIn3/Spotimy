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
import { bgColorCTX } from '../contexts/bgColorCTX'

const Layout = () => {
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");
  const [play, setPlay] = useState(false);
  const [bg, setBg] = useState('')
  const [id, setId] = useState("");
  const [src, setSrc] = useState("");
  const [open, setOpen] = useState(false);
  const [reloadPlaylists, setReloadPlaylists] = useState(0);
  const [info, setInfo] = useState({
    img: "https://i.scdn.co/image/ab67616d000048512a3e79f1348f62bfe6063314",
    imgbig: "https://i.scdn.co/image/ab67616d000048512a3e79f1348f62bfe6063314",
    title: "Play It Safe",
    artist: "Julia Wolf",
  });

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const next = () => {
    navigate(1);
  };
  const Setreload = () => {

    reloadPlaylists ? setReloadPlaylists(false) : setReloadPlaylists(true)
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
      <a
        href={`${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public`}
      >
        <button className="log-in-btn">Log in</button>
      </a>
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
              <myPlaylistCTX.Provider value={{ setPlaylist, playlist }}>
                <reloadPlaylistsCTX.Provider
                  value={{ Setreload , reloadPlaylists}}
                >
					<bgColorCTX.Provider value={{setBg, bg}}>
                  <div className="flex relative">
                    <Aside />
                    <div className="w-[77.2%] relative ml-[20.2%] ">
                      <Header goBack={goBack} next={next} />
                      <main className="mt-[110px] mb-[150px] min-h-[100vh]">
                        <Outlet />
                      </main>
                      <Footer />
                    </div>
                  </div>
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
