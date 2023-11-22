import styles from "./styles.module.scss";

type CheckBoxProps = {
	clickHandler?: () => void;
	checked?: boolean;
};

/*
	@author Aravindhan A
	@description This component renders a custom checkbox.
*/

const CheckBox = (props: CheckBoxProps) => {
	const { clickHandler, checked = true } = props;

	return (
		<input
			onChange={clickHandler}
			className={`${styles.checkbox} ${styles.checked}`}
			type="checkbox"
			checked={checked}
		/>
	);
};

export default CheckBox;
