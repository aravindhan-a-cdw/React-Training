import styles from "./styles.module.scss";

type CheckBoxProps = {
	clickHandler?: () => void;
	checked?: boolean;
};

const CheckBox = (props: CheckBoxProps) => {
	const { clickHandler, checked = true } = props;
	// const [checked, setChecked] = useState(checked);

	// const clickHandler = () => setChecked(!checked);

	return (
		<input
			onChange={clickHandler}
			className={styles.checkbox}
			type="checkbox"
			checked={checked}
		/>
	);
};

export default CheckBox;
