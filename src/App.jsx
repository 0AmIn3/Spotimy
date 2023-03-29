import { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Playlist from "./components/Playlist";
import Layout from "./Layout/Layout";
import Doc from "./pages/doc";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Settings from "./pages/Settings";
function App() {
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
