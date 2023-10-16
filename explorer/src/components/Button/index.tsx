import styles from "./styles.module.scss";
import PropTypes from "prop-types";

type ButtonProps = {
	children: string;
	className?: string;
	onClick?: (event: any) => void;
};

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
};

function Button(props: ButtonProps) {
	const { children, className, onClick } = props;
	return (
		<button onClick={onClick} className={`${styles.btn} ${className}`}>
			{children}
		</button>
	);
}

export default Button;
