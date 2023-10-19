import { ReactNode } from "react";
import styles from "./styles.module.scss";
import SideBarNav from "../SideBarNav";

type SideBarProps = {
	children?: ReactNode | string;
};

const SideBar = (props: SideBarProps) => {
	const { children } = props;
	return (
		<div className={styles.sidebar}>
			<SideBarNav />
			{children}
		</div>
	);
};

export default SideBar;
