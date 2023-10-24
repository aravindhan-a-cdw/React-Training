import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";

/*
	@author Aravindhan A
	@description PageLayout Component - This is common layout of the application and used in router to render the 
	respective component for the page.
*/

function PageLayout() {
	const { state } = useNavigation();
	return (
		<div>
			<header>
				<Nav />
			</header>
			{state === "loading" ? "Loading" : <Outlet />}
			<Footer />
		</div>
	);
}

export default PageLayout;
