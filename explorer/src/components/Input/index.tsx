import styles from "./styles.module.scss";
import PropTypes from "prop-types";

/*
	@author Aravindhan A
	@description Input Component - This will render the Input menu
*/

type InputProps = {
	className?: string;
	type?: string;
	value?: string;
	onChange?: (arg: any) => void;
	id?: string;
	name?: string;
	error?: boolean;
	ref?: React.MutableRefObject<HTMLInputElement>;
	min_length?: number;
	max_length?: number;
};

function Input(props: InputProps) {
	const {
		className,
		type = "text",
		value,
		onChange,
		id,
		name,
		error = false,
		ref,
		...others
	} = props;
	return (
		<input
			className={`${styles.input} ${className} ${
				error ? styles.error : ""
			}`}
			type={type}
			value={value}
			onChange={(event) => onChange && onChange(event.target.value)}
			id={id}
			name={name}
			ref={ref}
			{...others}
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
