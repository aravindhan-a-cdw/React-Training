import Blog from "../../components/Blog";
import SideBar from "../../components/SideBar";
import BlogsList from "../BlogsList";
import styles from "./styles.module.scss";

const HomeLayout = () => {
	return (
		<div className={styles.container}>
			<SideBar />
			<BlogsList />
			<Blog className={styles.blog} />
		</div>
	);
};

export default HomeLayout;
