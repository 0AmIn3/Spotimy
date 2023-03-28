import { Route, Routes } from "react-router-dom";
import Doc from "./pages/doc";

function App() {
	return (
		<Routes>
			{/* <Route path="/" element={<Layout/>} > */}
                <Route path="/" element={<Doc/>}/>
            {/* </Route> */}
		</Routes>
	)
}

export default App;
