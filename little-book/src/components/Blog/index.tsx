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
import { FormEvent, useCallback, useMemo, useState } from "react";
import { HOME_CONSTANTS } from "../../constants/pageConstants";

/*
	@author Aravindhan A
	@description This component renders the detailed blog with Image and details with ability to edit the blog
*/

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
	// prop destructuring
	const { className = "" } = props;

	// hook initializations
	const dispatch = useDispatch();
	const [content, setContent] = useState({ title: "", details: "" });

	// get redux states
	const editMode = useSelector(selectBlogEditMode);
	const blogs: Array<BlogData> = useSelector(selectBlogs);
	const selectedBlog = useSelector(selectSelectedBlog);

	const blogDetails = useMemo(() => {
		const blog = blogs.find((data) => data.id === selectedBlog);
		if (blog === undefined)
			return {
				id: "",
				photo: "",
				type: "Local",
				title: "",
				details: "",
			} as BlogData;
		setContent({ title: blog.title, details: blog.details });
		return blog;
	}, [selectedBlog, blogs]);

	const saveContentHandler = useCallback(() => {
		// Handler to save content of a edited blog
		// prepare data
		const blogData = {
			id: blogDetails?.id,
			title: content.title,
			details: content.details,
			photo: blogDetails?.photo,
			type: blogDetails?.type,
		};
		// dispatch action to save edited blog with prepared data
		dispatch(editBlog({ blogData, id: selectedBlog }));
		// dispatch action to toggle edit mode
		dispatch(toggleEditMode());
	}, [blogDetails, dispatch, selectedBlog, content]);

	const toggleEditModeHandler = useCallback(() => {
		dispatch(toggleEditMode());
	}, [dispatch]);

	const onChangeHandler = (
		event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const name = event.currentTarget.name;
		const value = event.currentTarget.value;
		console.log("length", value.length);
		if (name === "title" && value.length > 64) return;
		setContent((state) => {
			return { ...state, [name]: value };
		});
	};

	const { photo = "", title, details } = blogDetails;

	if (selectedBlog === null) return <div>No blog to show</div>;

	return (
		<div className={`${styles.blogContainer} ${className}`}>
			<Image src={photo} alt={title} />
			{editMode ? (
				// When edit mode is true change the tags to get input from user
				<>
					<input
						type="text"
						name="title"
						placeholder="Name your blog"
						value={content.title}
						onChange={onChangeHandler}
					/>
					<span>
						Remaining characters: {64 - content.title.length}
					</span>
					<textarea
						name="details"
						placeholder="Write Content Here"
						value={content.details}
						onChange={onChangeHandler}
					></textarea>
				</>
			) : (
				<>
					<h2>{title}</h2>
					<p>{details}</p>
				</>
			)}
			{editMode ? (
				// When edit mode is true show save and cancel button
				<div className={styles.userActions}>
					<Button
						clickHandler={toggleEditModeHandler}
						type="secondary"
					>
						Cancel
					</Button>
					<Button clickHandler={saveContentHandler}>
						Save Content
					</Button>
				</div>
			) : (
				// When the edit mode is false so edit button
				<Button
					clickHandler={toggleEditModeHandler}
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
