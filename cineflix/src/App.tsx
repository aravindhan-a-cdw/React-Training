import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./containers/Layout";
import Home, { loader as homeLoader } from "./screens/Home";
import AllMovies, { loader as allMoviesLoader } from "./screens/AllMovies";
import NowShowing from "./screens/NowShowing";
import Login, { loginAction } from "./screens/Login";
import AuthContextProvider from "./stores/AuthContext";
import ErrorPage from "./screens/ErrorPage";
import TeaserList from "./containers/TeaserList";

/*
	@author Aravindhan A
	@description This is the App component which has the router and AuthContext setup to the whole application
*/

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			errorElement: <ErrorPage />,
			children: [
				{
					element: <Home />,
					children: [
						{
							path: "",
							element: <TeaserList />,
							loader: homeLoader,
						},
					],
				},
				{
					path: "all-movies",
					element: <AllMovies />,
					loader: allMoviesLoader,
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
