import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This is the layout which renders header and footer with the main content.
*/

const PageLayout = () => {
	return (
		<div>
			<header className={styles.sticky_header}>
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
