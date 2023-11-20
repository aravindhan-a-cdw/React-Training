import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

/*
	@author Aravindhan A
	@description This is a layout component which is common to all pages.
*/

const Layout = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	);
};

export default Layout;
