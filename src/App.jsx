import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import Doc from "./pages/doc";
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
                <Route index path="/" element={<Doc/>}/>
            </Route>
		</Routes>
	)
}

export default App;
