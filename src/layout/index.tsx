import { lazy } from 'react';
import { Outlet } from 'react-router-dom'
const Header = lazy(() => import("../components/Header"));
const Contact = lazy(() => import("../components/Contact"));

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Contact />
		</>
	)
}

export default Layout
