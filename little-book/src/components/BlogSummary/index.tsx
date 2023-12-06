import React from "react";
import styles from "./styles.module.scss";

type BlogSummaryProps = {
	id: string;
	title: string;
	details: string;
	type: string;
	photo?: string;
	selected?: boolean;
	clickHandler: (arg1: string) => void;
};

/*
	@author Aravindhan A
	@description This component renders the summary of a blog.
*/

/**
 * This is a memoized functional component which takes id, title, details, type, photo, selected and clickHandler as props and renders the summary of a blog.
 *
 * @param {BlogSummaryProps} props The props that were defined by the caller of this component.
 */
const BlogSummary = React.memo((props: BlogSummaryProps) => {
	const { id, title, details, type, clickHandler, selected = false } = props;

	/**
	 *	This function is called when user clicks on this component.
	 */
	const blogSelectHandler = () => {
		// do nothing when user clicks on the selected blog
		if (selected) return;

		clickHandler(id);
	};

	return (
		<div
			onClick={blogSelectHandler}
			className={`${styles.blogSummaryContainer} ${
				selected ? styles.selected : ""
			}`}
		>
			<h3>{title}</h3>
			<span>{type}</span>
			<p>{details}</p>
		</div>
	);
});

export default BlogSummary;
