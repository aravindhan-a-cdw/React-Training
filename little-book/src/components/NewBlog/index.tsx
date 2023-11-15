import { useRef } from "react";
import Button from "../Button";
import styles from "./styles.module.scss";
import { addBlog } from "../../actions/blog";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/modal";

const NewBlog = () => {
	const dispatch = useDispatch();

	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const addHandler = () => {
		const titleValue = inputRef.current?.value.trim();
		const detailValue = textareaRef.current?.value.trim();

		if (titleValue === undefined || detailValue === undefined) return;

		const blogData = {
			title: titleValue,
			details: detailValue,
			type: "National",
		};
		dispatch(addBlog(blogData));
		dispatch(closeModal());
	};

	return (
		<div className={styles.newBlogContainer}>
			<h3>Add New Blog</h3>
			<input ref={inputRef} placeholder="Name your blog" type="text" />
			<textarea
				ref={textareaRef}
				placeholder="Write Content Here .."
			></textarea>
			<Button clickHandler={addHandler} className={styles.addButton}>
				Add
			</Button>
		</div>
	);
};

export default NewBlog;
