import styles from "./styles.module.scss";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../stores/AuthContext";
import { useContext } from "react";
import NavItem from "../NavItem";
import Image from "../Image";
import { Link, useLocation } from "react-router-dom";
import { NAVBAR_CONSTANTS } from "../../constants/componentConstants";

/*
	@author Aravindhan A
	@description This component renders the navigation bar containing logo and other user navigatables.
*/

const NavBar = () => {
	const contextData = useContext(AuthContext);
	const location = useLocation();
	const { dispatch } = useContext(AuthContext);

	const logoutHandler = () => {
		dispatch({
			type: "LOGOUT",
			payload: { username: null, isAuthenticated: false },
		});
	};

	return (
		<div className={styles.navbar}>
			<Link to="/">
				<Image src={logo} alt="Logo of Cineflix" />
			</Link>
			{/* Only show nav links when not in login page */}
			{location.pathname !== "/login" ? (
				<>
					<div className={styles.links}>
						<ul>
							{NAVBAR_CONSTANTS.LINKS.map((data, index) => {
								if (data.protected) {
									if (contextData.authData.isAuthenticated)
										return (
											<NavItem key={index} to={data.link}>
												{data.title}
											</NavItem>
										);
									return <div key={index}></div>;
								} else {
									return (
										<NavItem key={index} to={data.link}>
											{data.title}
										</NavItem>
									);
								}
							})}
						</ul>
					</div>
					<div className={styles.userSection}>
						{contextData.authData.isAuthenticated ? (
							<>
								<span className={styles.userAction}>
									Hi {contextData.authData.username} |{" "}
								</span>
								<span
									onClick={logoutHandler}
									className={styles.logout}
								>
									{NAVBAR_CONSTANTS.LOGOUT}
								</span>
							</>
						) : (
							<NavItem to="/login">
								{NAVBAR_CONSTANTS.LOGIN}
							</NavItem>
						)}
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default NavBar;
