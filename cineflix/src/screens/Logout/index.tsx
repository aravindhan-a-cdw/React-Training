import { useContext, useEffect } from "react";
import { AuthContext } from "../../stores/AuthContext";
import { Navigate } from "react-router-dom";

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
