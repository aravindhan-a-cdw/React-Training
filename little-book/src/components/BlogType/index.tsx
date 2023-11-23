import CheckBox from "../CheckBox";
import styles from "./styles.module.scss";

type BlogTypeProps = {
	type: string;
	selected: boolean;
	onSelect: (type: string) => void;
};

const BlogType = (props: BlogTypeProps) => {
	const { type, selected, onSelect } = props;

	return (
		<div className={styles.filter}>
			<CheckBox name={type} checked={selected} clickHandler={onSelect} />{" "}
			{type} {"Blogs"}
		</div>
	);
};

export default BlogType;
