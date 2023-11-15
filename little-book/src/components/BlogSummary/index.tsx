import styles from "./styles.module.scss";

type BlogSummaryProps = {
	title: string;
	details: string;
	type: string;
	photo?: string;
};

const BlogSummary = (props: BlogSummaryProps) => {
	const { title, details, type } = props;

	return (
		<div className={`${styles.blogSummaryContainer} ${styles.selected}`}>
			<h3>{title}</h3>
			<span>{type}</span>
			<p>{details}</p>
		</div>
	);
};

export default BlogSummary;
