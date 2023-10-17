import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PageLayout = () => {
	return (
		<div>
			<header>
				<Header></Header>
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<Footer></Footer>
			</footer>
		</div>
	);
};

export default PageLayout;
