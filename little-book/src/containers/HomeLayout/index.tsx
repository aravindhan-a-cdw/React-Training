import { useSelector } from "react-redux";
import { selectDarkMode } from "../../actions/darkMode";
import Blog from "../../components/Blog";
import SideBar from "../../components/SideBar";
import BlogsList from "../BlogsList";
import styles from "./styles.module.scss";
import Modal from "../../components/Modal";

const HomeLayout = () => {
	const darkMode = useSelector(selectDarkMode);

	return (
		<div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
			<SideBar />
			<BlogsList />
			<Blog className={styles.blog} />

			<Modal />
		</div>
	);
};

export default HomeLayout;
