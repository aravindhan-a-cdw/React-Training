import styles from "./style.module.css";

type BadgeProps = {
	children: string;
};

function Badge(props: BadgeProps) {
	const { children: interest } = props;
	return <span className={styles.interest}>{interest}</span>;
}

export default Badge;
