import { Outlet } from "react-router-dom";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";

function PageLayout() {
	return (
		<div>
			<header>
				<Nav />
			</header>
			<Outlet />
			<Footer />
		</div>
	);
}

export default PageLayout;
