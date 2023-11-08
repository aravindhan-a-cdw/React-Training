import { useContext, useEffect } from "react";
import { AuthContext } from "../../stores/AuthContext";
import { Navigate } from "react-router-dom";

/*
	@author Aravindhan A
	@description This component logouts the user and redirects to home page.
*/

const Logout = () => {
	const { dispatch } = useContext(AuthContext);

	useEffect(() => {
		dispatch({
			type: "LOGOUT",
			payload: { username: null, isAuthenticated: false },
		});
	}, [dispatch]);

	return <Navigate to={"/"} />;
};

export default Logout;
