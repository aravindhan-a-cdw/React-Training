import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Spinner from "./components/Spinner";
import PageLayout from "./containers/PageLayout";
import Home, { loader as homeLoader } from "./screens/Home";
import ProductPageLayout from "./containers/ProductPageLayout";
import Products, { loader as productLoader } from "./screens/Products";
import Order from "./screens/Order";

/*
	@author Aravindhan A
	@description This is the Application component which renders the whole application.
*/

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <PageLayout />,
			children: [
				{
					path: "/",
					element: <Home />,
					loader: () => homeLoader(),
				},
				{
					path: "orders",
					element: <Order />,
					loader: () => homeLoader(),
				},
			],
		},
		{
			path: "products",
			element: <ProductPageLayout />,
			children: [
				{
					path: ":category",
					element: <Products />,
					loader: ({ params }) => productLoader(params.category),
				},
			],
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
