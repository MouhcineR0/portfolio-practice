import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "../layout";
import ImportDelay from "../utils/ImportDelay";
import { Suspense } from "react";
import Loading from "../utils/Loading";
const Error404 = ImportDelay("../pages/Error404");
const Home = ImportDelay("../pages/Home");
const Blog = ImportDelay("../pages/Blog");
const Work = ImportDelay("../pages/Work");
const WorkDetails = ImportDelay("../pages/Work/WorkDetails");

function Index(): any {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Suspense key={"home"} fallback={<Loading />}><Home /></Suspense>} />
					<Route path="/blog" element={<Suspense key={"blog"} fallback={<Loading />}><Blog /></Suspense>} />
					<Route path="/blog/:id" element={<Suspense key={"blogid"} fallback={<Loading />}><Blog /></Suspense>} />
					<Route path="/work" element={<Suspense key={"work"} fallback={<Loading />}><Work /></Suspense>} />
					<Route path="/work/:id" element={<Suspense key={"workid"} fallback={<Loading />}><WorkDetails /></Suspense>} />
					<Route path="*" element={<Suspense key={"*"} fallback={<Loading />}><Error404 /></Suspense>} />
					<Route path="/loading" element={<Loading />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Index;