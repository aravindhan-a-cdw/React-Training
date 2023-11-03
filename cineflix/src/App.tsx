import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./containers/Layout";
import Home, { loader as homeLoader } from "./screens/Home";
import AllMovies from "./screens/AllMovies";
import NowShowing from "./screens/NowShowing";
import Login, { loginAction } from "./screens/Login";
import AuthContextProvider from "./stores/AuthContext";
import Logout from "./screens/Logout";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Home />,
					loader: homeLoader,
				},
				{
					path: "all-movies",
					element: <AllMovies />,
				},
				{
					path: "now-showing",
					element: <NowShowing />,
				},
				{
					path: "login",
					element: <Login />,
					action: loginAction,
				},
				{
					path: "logout",
					element: <Logout />,
				},
			],
		},
	]);
	return (
		<AuthContextProvider>
			<RouterProvider router={router} />
		</AuthContextProvider>
	);
}

export default App;
