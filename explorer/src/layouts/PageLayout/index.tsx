import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";

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
