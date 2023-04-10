
import { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import Doc from "./pages/doc";
import SearchPage from "./pages/SearchPage";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import PlayList from "./pages/PlayList"
import Library from "./pages/Library"
import CreatePlaylist from "./pages/CreatePlaylist";
import LikedSongs from "./pages/LikedSongs";

function App() {

	let location = useLocation()


	useEffect(() => {
		let body = document.body
		if(location.pathname === '/') {
		 body.style.backgroundImage = 'linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)'
		 body.style.backgroundRepeat = 'no-repeat'
		} 
	}, [])
	

	return (
		<Routes>
			<Route path="/" element={<Layout/>} >
                <Route index path="/" element={<Home/>}/>
                <Route path="/playlist/:id" element={<PlayList/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/create" element={<CreatePlaylist/>}/>
                <Route path="/library" element={<Library/>}/>
                <Route path="/liked" element={<LikedSongs/>}/>
            </Route>
		</Routes>
	)
  }

export default App;
