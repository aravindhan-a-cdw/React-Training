import styles from "./styles.module.scss";

type LogoProps = {
	className?: string;
};

const Logo = (props: LogoProps) => {
	const { className = "" } = props;
	return (
		<div className={`${styles.logo} ${className}`}>
			<span>Little</span> Book
		</div>
	);
};

export default Logo;
