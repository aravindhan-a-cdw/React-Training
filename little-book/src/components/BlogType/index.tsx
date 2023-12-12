import CheckBox from "../CheckBox";
import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This component renders the filter options for the blogs based on the type of the blog.
*/

type BlogTypeProps = {
	type: string;
	selected: boolean;
	onBlogTypeSelect: (type: string, include: boolean) => void;
};

/**
 * This is a functional component which takes type and selected as props and renders the filter option for the blog.
 *
 * @param {BlogTypeProps} props - The props that were defined by the caller of this component.
 */
const BlogType = (props: BlogTypeProps) => {
	const { type, selected, onBlogTypeSelect } = props;

	return (
		<div className={styles.filter}>
			<CheckBox
				name={type}
				checked={selected}
				clickHandler={onBlogTypeSelect}
			/>{" "}
			{type} {"Blogs"}
		</div>
	);
};

export default BlogType;
