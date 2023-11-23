import styles from "./styles.module.scss";

type CheckBoxProps = {
	name: string;
	clickHandler?: (arg: string) => void;
	checked?: boolean;
};

/*
	@author Aravindhan A
	@description This component renders a custom checkbox.
*/

const CheckBox = (props: CheckBoxProps) => {
	const { name, clickHandler, checked = true } = props;

	const onClickHandler = () => {
		if (clickHandler) clickHandler(name);
	};

	return (
		<input
			name={name}
			onChange={onClickHandler}
			className={`${styles.checkbox} ${styles.checked}`}
			type="checkbox"
			checked={checked}
		/>
	);
};

export default CheckBox;
