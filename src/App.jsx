import { Suspense, useEffect, lazy} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Audio } from "react-loader-spinner";

const Home = lazy(() => import("./pages/Home")) 
const Settings = lazy(() => import("./pages/Settings")) 
const PlayList = lazy(() => import("./pages/PlayList")) 
const Library = lazy(() => import("./pages/Library")) 
const CreatePlaylist = lazy(() => import("./pages/CreatePlaylist")) 
const LikedSongs = lazy(() => import("./pages/LikedSongs")) 
const SearchPage = lazy(() => import('./pages/SearchPage'))


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
		<Suspense fallback={<Audio width="100" height="100" />} >
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
		</Suspense>
	)
  }

export default App;
