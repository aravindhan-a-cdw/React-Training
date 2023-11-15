import BlogSummary from "../../components/BlogSummary";
import SearchBar from "../../components/SearchBar";
import styles from "./styles.module.scss";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../actions/filter";
import {
	selectBlogs,
	selectSelectedBlog,
	setSelectedBlog,
} from "../../actions/blog";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
import { toggleAddNewBlog } from "../../actions/modal";

type BlogType = {
	title: string;
	details: string;
	photo?: string;
	type: string;
};

const BlogsList = () => {
	const dispatch = useDispatch();

	const filters = useSelector(selectFilter);
	const blogs: Array<BlogType> = useSelector(selectBlogs);
	const selectedBlog = useSelector(selectSelectedBlog);

	const filteredBlogs = blogs.filter((blog) => {
		return (
			blog.title.includes(filters.query) &&
			filters.types.includes(blog.type)
		);
	});

	const blogElements = filteredBlogs.map((data, index) => {
		const clickHandler = () => dispatch(setSelectedBlog(index));
		return (
			<BlogSummary
				clickHandler={clickHandler}
				selected={index === selectedBlog}
				key={index}
				{...data}
			/>
		);
	});

	const newBlogClickHandler = () => {
		dispatch(toggleAddNewBlog());
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<SearchBar
					className={styles.search}
					placeholder={HOME_CONSTANTS.SEARCH_PLACEHOLDER}
				/>
				<Button clickHandler={newBlogClickHandler}>
					{HOME_CONSTANTS.NEW}
				</Button>
			</div>
			<div className={styles.blogs}>{blogElements}</div>
		</div>
	);
};

export default BlogsList;
