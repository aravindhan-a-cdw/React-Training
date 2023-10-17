import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Spinner from "./components/Spinner";
import "./App.css";
import PageLayout from "./containers/PageLayout";
import Home from "./pages/Home";
import ProductPageLayout from "./containers/ProductPageLayout";
import Products from "./pages/Products";
import Order from "./pages/Order";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <PageLayout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "orders",
					element: <Order />,
				},
			],
		},
		{
			path: "products",
			element: <ProductPageLayout />,
			children: [{ path: "", element: <Products /> }],
		},
	]);
	return (
		<RouterProvider
			router={router}
			fallbackElement={<Spinner />}
		></RouterProvider>
	);
}

export default App;
