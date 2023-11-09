import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This layout only renders header and main content
*/

const ProductPageLayout = () => {
	return (
		<div>
			<header className={styles.sticky_header}>
				<Header></Header>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default ProductPageLayout;
