import { Route, Routes, BrowserRouter } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";

function Index(): any {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Index;