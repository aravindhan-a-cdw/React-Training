import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./containers/Layout";
import Home from "./screens/Home";
import AllMovies from "./screens/AllMovies";
import NowShowing from "./screens/NowShowing";
import Login, { loginAction } from "./screens/Login";
import AuthContextProvider from "./stores/AuthContext";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Home />,
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
