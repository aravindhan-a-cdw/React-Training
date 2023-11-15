import styles from "./styles.module.scss";
import Button from "../Button";
import { useSelector } from "react-redux";
import { selectBlogs, selectSelectedBlog } from "../../actions/blog";
import fallbackImage from "../../assets/default-fallback-image.png";

type BlogProps = {
	className?: string;
};

type BlogType = {
	title: string;
	details: string;
	type: string;
	photo?: string;
};

const Blog = (props: BlogProps) => {
	const blogs: Array<BlogType> = useSelector(selectBlogs);
	const selectedBlog = useSelector(selectSelectedBlog);

	const blogDetails = blogs[selectedBlog] || {};

	const { className = "" } = props;

	const { photo = "", title, details } = blogDetails;
	return (
		<div className={`${styles.blogContainer} ${className}`}>
			<img
				onError={(event) => (event.currentTarget.src = fallbackImage)}
				src={photo}
				alt={title}
			/>
			<h2>{title}</h2>
			<p>{details}</p>
			<Button className={styles.button} type="secondary">
				Edit Content
			</Button>
		</div>
	);
};

export default Blog;
