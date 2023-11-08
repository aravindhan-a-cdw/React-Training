import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This component renders the input element
*/

type InputProps = {
	type: string;
	name: string;
	id: string;
	className?: string;
};

const Input = (props: InputProps) => {
	const { type, name, id, className = "" } = props;
	return (
		<input
			className={`${styles.input} ${className}`}
			type={type}
			name={name}
			id={id}
		/>
	);
};

export default Input;
