import styles from "./styles.module.scss";
import PropTypes from "prop-types";

type InputProps = {
	className?: string;
	type?: string;
	value?: string;
	onChange?: (arg: any) => void;
	id?: string;
	name?: string;
};

function Input(props: InputProps) {
	const { className, type = "text", value, onChange, id, name } = props;
	return (
		<input
			className={`${styles.input} ${className}`}
			type={type}
			value={value}
			onChange={(event) => onChange && onChange(event.target.value)}
			id={id}
			name={name}
		/>
	);
}

Input.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	className: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

export default Input;
