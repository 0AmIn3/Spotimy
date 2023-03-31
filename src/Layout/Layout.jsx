import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { searchCTX } from "../contexts/searchCTX";
import { spotify } from "../contexts/spotifyCTX";
import { tokenCTX } from "../contexts/tokenCTX";
import { musicCTX } from "../contexts/musicCTX";

const Layout = () => {

   const [token, setToken] = useState('')
   const [search, setSearch] = useState('')
   const [play, setPlay] = useState(false)
   const [id, setId] = useState('')
   const [src, setSrc] = useState('')

   const changePlay = () => {
      setPlay(!play)
   }
   const changePlayTrue = () => {
      setPlay(true)
   }
   const changeId = (id) => {
      setId(id)
   }
   const changeSrc = (src) => {
      setSrc(src)
   }
   
   let setSearchResults = (text) => {
      let uptadeText = text.toLowerCase().trim()
      setSearch(uptadeText)
   }
	const {client_id,REDIRECT_URI,AUTH_ENDPOINT,RESPONSE_TYPE} = useContext(spotify);

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


      setToken(localedTOKEN)
	}, []);


   if(!token) {
      return (
         <a
            href={`${AUTH_ENDPOINT}?client_id=${client_id}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public`}
         >
            <button className="log-in-btn">Log in</button>
         </a>
      )
   }


	return (
		<tokenCTX.Provider value={token}>
			<searchCTX.Provider value={{setSearchResults, search}}>
            <musicCTX.Provider value={{changePlay, changeId, changeSrc, changePlayTrue, play, id, src}}>
         <div className="flex relative">
				<Aside />
				<div className="w-[77.2%] relative ml-[20.2%] ">
					<Header />
					<main className="mt-[110px] mb-[150px] min-h-[100vh]">
						<Outlet />
					</main>
					<Footer />
				</div>
			</div>
            </musicCTX.Provider>
         </searchCTX.Provider>
		</tokenCTX.Provider>
	);
};

export default Layout;
