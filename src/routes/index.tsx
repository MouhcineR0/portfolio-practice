import { Route, Routes, BrowserRouter } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Blog from "../pages/Blog";

function Index(): any {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Blog" element={<Blog />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Contact />
		</BrowserRouter>
	)
}

export default Index;