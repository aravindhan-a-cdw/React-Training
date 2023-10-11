import style from "./styles.module.scss";
import { NAVBAR_CONSTANTS } from "../../constants/ComponentConstants";

const Nav = () => {
	return (
		<nav className={style.nav}>
			<a href={NAVBAR_CONSTANTS.ROOT_URL}>
				<img
					className={style.nav_img}
					src={NAVBAR_CONSTANTS.LOGO.src}
					alt={NAVBAR_CONSTANTS.LOGO.alt}
				/>
			</a>
			<ul className={style.nav_ul}>
				{NAVBAR_CONSTANTS.NAV_LINKS.map((item, index) => {
					return (
						<li key={index}>
							<a href={item.href}>{item.title}</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Nav;
