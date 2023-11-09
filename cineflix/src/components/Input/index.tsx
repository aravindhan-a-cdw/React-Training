import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This component renders the input element
*/

type InputProps = {
	type?: string;
	name: string;
	id?: string;
	className?: string;
};

const Input = (props: InputProps) => {
	const { type = "text", name, id = "", className = "" } = props;
	return (
		<input
			data-testid="input"
			className={`${styles.input} ${className}`}
			type={type}
			name={name}
			id={id}
			data-testid="input"
		/>
	);
};

export default Input;
