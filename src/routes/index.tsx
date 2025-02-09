import { Route, Routes, BrowserRouter } from "react-router-dom";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Blog from "../pages/Blog";
import Work from "../pages/Work";
import WorkDetails from "../pages/Work/WorkDetails";

function Index(): any {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:id" element={<Blog />} />
				<Route path="/work" element={<Work />} />
				<Route path="/work/:id" element={<WorkDetails />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Contact />
		</BrowserRouter>
	)
}

export default Index;