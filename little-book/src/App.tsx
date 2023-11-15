import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";

const router = createHashRouter([
	{
		path: "/",
		element: <Home />,
	},
]);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />;
		</Provider>
	);
}

export default App;
