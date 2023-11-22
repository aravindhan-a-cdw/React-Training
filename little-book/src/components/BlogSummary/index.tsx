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

const BlogSummary = React.memo((props: BlogSummaryProps) => {
	const { id, title, details, type, clickHandler, selected = false } = props;

	const onClickHandler = () => {
		// do nothing when user clicks on the selected blog
		if (selected) return;

		clickHandler(id);
	};

	return (
		<div
			onClick={onClickHandler}
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
