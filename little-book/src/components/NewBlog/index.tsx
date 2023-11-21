import { useRef } from "react";
import Button from "../Button";
import styles from "./styles.module.scss";
import { addBlog } from "../../actions/blog";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/modal";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
import uuidv4 from "../../utils/uuid";

const NewBlog = () => {
	const dispatch = useDispatch();

	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const addHandler = () => {
		const titleValue = inputRef.current?.value.trim();
		const detailValue = textareaRef.current?.value.trim();

		if (titleValue === undefined || detailValue === undefined) return;

		const blogData = {
			id: uuidv4(),
			title: titleValue,
			details: detailValue,
			type: "Local",
		};
		dispatch(addBlog(blogData));
		dispatch(closeModal());
	};

	return (
		<div className={styles.newBlogContainer}>
			<h3>{HOME_CONSTANTS.NEW_BLOG}</h3>
			<input
				ref={inputRef}
				placeholder={HOME_CONSTANTS.NEW_BLOG_TITLE_PLACEHOLDER}
				type="text"
			/>
			<textarea
				ref={textareaRef}
				placeholder={HOME_CONSTANTS.NEW_BLOG_CONTENT_PLACEHOLDER}
			></textarea>
			<Button clickHandler={addHandler} className={styles.addButton}>
				{HOME_CONSTANTS.ADD}
			</Button>
		</div>
	);
};

export default NewBlog;
