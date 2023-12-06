import styles from "./styles.module.scss";

type CheckBoxProps = {
	name: string;
	clickHandler?: (arg1: string, arg2: boolean) => void;
	checked?: boolean;
};

/*
	@author Aravindhan A
	@description This component renders a custom checkbox.
*/

/**
 * This is a functional component which renders a custom checkbox.
 *
 * @param {CheckBoxProps} props The props to should contain name and clickHandler.
 */
const CheckBox = (props: CheckBoxProps) => {
	const { name, clickHandler, checked = true } = props;

	const onChangeHandler = () => {
		if (clickHandler) clickHandler(name, !checked);
	};

	return (
		<input
			name={name}
			onChange={onChangeHandler}
			className={`${styles.checkbox} ${styles.checked}`}
			type="checkbox"
			checked={checked}
		/>
	);
};

export default CheckBox;
