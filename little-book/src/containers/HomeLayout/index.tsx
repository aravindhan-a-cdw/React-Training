import { useSelector } from "react-redux";
import { selectDarkMode } from "../../actions/darkMode";
import Blog from "../../components/Blog";
import SideBar from "../../components/SideBar";
import BlogsList from "../BlogsList";
import styles from "./styles.module.scss";
import SideModal from "../../components/SideModal";

/*
	@author Aravindhan A
	@description This component renders the layout of the Home page
*/

const HomeLayout = () => {
	// get state from store
	const darkMode = useSelector(selectDarkMode);

	return (
		<div className={`${styles.container} ${darkMode ? styles.dark : ""}`}>
			<SideBar />
			<BlogsList />
			<Blog />

			<SideModal />
		</div>
	);
};

export default HomeLayout;
