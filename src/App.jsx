import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Playlist from "./components/Playlist";
import Layout from "./Layout/Layout";
import Doc from "./pages/doc";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Settings from "./pages/Settings";
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
                <Route path="/playlist" element={<Playlist/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Route>
		</Routes>
	)
}

export default App;
