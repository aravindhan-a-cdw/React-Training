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
import Image from "../Image";
import { useRef } from "react";
import { HOME_CONSTANTS } from "../../constants/pageConstants";

type BlogProps = {
	className?: string;
};

type BlogData = {
	id: string;
	title: string;
	details: string;
	photo?: string;
	type?: string;
};

const Blog = (props: BlogProps) => {
	const dispatch = useDispatch();
	const titleRef = useRef<HTMLInputElement>(null);
	const detailsRef = useRef<HTMLTextAreaElement>(null);

	const editMode = useSelector(selectBlogEditMode);

	const blogs: Array<BlogData> = useSelector(selectBlogs);
	const selectedBlog = useSelector(selectSelectedBlog);

	const blogDetails = blogs.find((data) => data.id === selectedBlog);

	if (blogDetails === undefined) {
		return <div>No blog to show</div>;
	}

	const saveContentHandler = () => {
		const titleValue = titleRef.current?.value;
		const detailsValue = detailsRef.current?.value;

		const blogData = {
			id: blogDetails.id,
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
			<Image src={photo} alt={title} />
			{editMode ? (
				<>
					<input
						type="text"
						ref={titleRef}
						placeholder="Name your blog"
						defaultValue={title}
					/>

					<textarea ref={detailsRef} placeholder="Write Content Here">
						{details}
					</textarea>
				</>
			) : (
				<>
					<h2>{title}</h2>
					<p>{details}</p>
				</>
			)}
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
					{HOME_CONSTANTS.EDIT_CONTENT}
				</Button>
			)}
		</div>
	);
};

export default Blog;
