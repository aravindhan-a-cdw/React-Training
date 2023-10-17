import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Spinner from "./components/Spinner";
import "./App.css";
import PageLayout from "./containers/PageLayout";
import Home, { loader } from "./screens/Home";
import ProductPageLayout from "./containers/ProductPageLayout";
import Products from "./screens/Products";
import Order from "./screens/Order";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <PageLayout />,
			children: [
				{
					path: "/",
					element: <Home />,
					loader: () => loader(),
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
			children: [{ path: ":category", element: <Products /> }],
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
