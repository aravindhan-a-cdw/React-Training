import styles from "./styles.module.scss";

type InputProps = {
	className?: string;
	type?: string;
	value?: string;
	onChange?: (arg: any) => void;
	id: string;
	name: string;
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

export default Input;
