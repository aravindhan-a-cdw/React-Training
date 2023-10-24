import style from "./styles.module.scss";
import PropTypes from "prop-types";
import { DROPDOWN_CONSTANTS } from "../../constants/ComponentConstants";

/*
	@author Aravindhan A
	@description Dropdown Component - Used to render dropdown menu
*/

type DropdownProps = {
	options: Array<string>;
	defaultValue?: any;
	borderColor?: string;
	onChange?: (value: string) => void;
	id_name?: string;
	className?: string;
	error?: boolean;
};

const Dropdown = (props: DropdownProps) => {
	const {
		options = [],
		defaultValue = "",
		onChange = null,
		id_name = "",
		className = "",
		error = false,
	} = props;
	const optionElements = Array.from(options).map((value, index) => {
		return (
			<option value={value} key={index}>
				{value}
			</option>
		);
	});

	const onValueChange = (event: { target: { value: string } }) => {
		if (typeof onChange === "function") {
			onChange(event.target.value);
		}
	};

	return (
		<select
			className={`${style.select} ${className} ${
				error ? style.error : ""
			}`}
			defaultValue={defaultValue}
			onChange={onValueChange}
			id={id_name}
			name={id_name}
		>
			<option value="" disabled hidden>
				{DROPDOWN_CONSTANTS.DEFAULT_OPTION}
			</option>
			{optionElements}
		</select>
	);
};

Dropdown.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string),
	defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	borderColor: PropTypes.string,
	onChange: PropTypes.func,
	id_name: PropTypes.string,
	className: PropTypes.string,
};

export default Dropdown;
