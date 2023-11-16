import styles from "./styles.module.scss";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import {
	editBlog,
	selectBlogEditMode,
	selectBlogs,
	selectSelectedBlog,
	toggleEditMode,
} from "../../actions/blog";
import fallbackImage from "../../assets/default-fallback-image.png";
import { useRef } from "react";

type BlogProps = {
	className?: string;
};

type BlogData = {
	title: string;
	details: string;
	photo?: string;
	type?: string;
};

const Blog = (props: BlogProps) => {
	const dispatch = useDispatch();
	const titleRef = useRef<HTMLHeadingElement>(null);
	const detailsRef = useRef<HTMLParagraphElement>(null);

	const editMode = useSelector(selectBlogEditMode);

	const blogs: Array<BlogData> = useSelector(selectBlogs);
	const selectedBlog = useSelector(selectSelectedBlog);

	const blogDetails = blogs[selectedBlog] || {};

	const saveContentHandler = () => {
		const titleValue = titleRef.current?.innerText;
		const detailsValue = detailsRef.current?.innerText;

		const blogData = {
			title: titleValue,
			details: detailsValue,
			photo: blogDetails.photo,
			type: blogDetails.type,
		};

		dispatch(editBlog({ blogData, index: selectedBlog }));
		dispatch(toggleEditMode());
	};

	const { className = "" } = props;

	const { photo = "", title, details } = blogDetails;
	return (
		<div className={`${styles.blogContainer} ${className}`}>
			<img
				onError={(event) => (event.currentTarget.src = fallbackImage)}
				src={photo}
				alt={title}
			/>
			<h2 ref={titleRef} key={`${editMode}h2`} contentEditable={editMode}>
				{title}
			</h2>
			<p ref={detailsRef} key={`${editMode}p`} contentEditable={editMode}>
				{details}
			</p>
			{editMode ? (
				<div className={styles.userActions}>
					<Button
						clickHandler={() => dispatch(toggleEditMode())}
						type="secondary"
					>
						Cancel
					</Button>
					<Button clickHandler={saveContentHandler}>
						Save Content
					</Button>
				</div>
			) : (
				<Button
					clickHandler={() => dispatch(toggleEditMode())}
					className={styles.button}
					type="secondary"
				>
					Edit Content
				</Button>
			)}
		</div>
	);
};

export default Blog;
