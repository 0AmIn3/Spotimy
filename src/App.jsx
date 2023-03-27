import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Doc from "./pages/doc";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout/>} >
                <Route index path="/" element={<Doc/>}/>
            </Route>
		</Routes>
	)
}

export default App;
