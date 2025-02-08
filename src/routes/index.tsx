import { Route, Routes, BrowserRouter } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Header from "../components/Header";

function Index(): any {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Index;