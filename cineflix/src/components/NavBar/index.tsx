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
					<div className={styles.userSection}>
						{contextData.authData.isAuthenticated ? (
							<>
								<span className={styles.username}>
									Hi {contextData.authData.username} |{" "}
								</span>
								<NavItem to="/logout">Logout</NavItem>
							</>
						) : (
							<NavItem to="/login">Login</NavItem>
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
