import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const ProductPageLayout = () => {
	return (
		<div>
			<header>
				<Header></Header>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default ProductPageLayout;
