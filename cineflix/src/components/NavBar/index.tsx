import styles from "./styles.module.scss";
import logo from "./logo.png";
import { AuthContext } from "../../stores/AuthContext";
import { useContext } from "react";
import NavItem from "../NavItem";
import { Link, useLocation } from "react-router-dom";
import { NAVBAR_CONSTANTS } from "../../constants/componentConstants";

const NavBar = () => {
	const contextData = useContext(AuthContext);
	const location = useLocation();

	return (
		<div className={styles.navbar}>
			<Link to="/">
				<img src={logo} alt="Logo of CineFlix" />
			</Link>

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
					<div className={styles.user_section}>
						{contextData.authData.isAuthenticated ? (
							<p>
								Hi {contextData.authData.username} |{" "}
								<NavItem to="/logout">Logout</NavItem>
							</p>
						) : (
							<p>Login</p>
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
