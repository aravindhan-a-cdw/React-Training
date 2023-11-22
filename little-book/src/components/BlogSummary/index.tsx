import styles from "./styles.module.scss";

type BlogSummaryProps = {
	title: string;
	details: string;
	type: string;
	photo?: string;
	selected?: boolean;
	clickHandler: () => void;
};

/*
	@author Aravindhan A
	@description This component renders the summary of a blog.
*/

const BlogSummary = (props: BlogSummaryProps) => {
	const { title, details, type, clickHandler, selected = false } = props;

	return (
		<div
			onClick={clickHandler}
			className={`${styles.blogSummaryContainer} ${
				selected ? styles.selected : ""
			}`}
		>
			<h3>{title}</h3>
			<span>{type}</span>
			<p>{details}</p>
		</div>
	);
};

export default BlogSummary;
