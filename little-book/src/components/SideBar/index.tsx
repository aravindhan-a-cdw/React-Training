import { useDispatch, useSelector } from "react-redux";
import {
	selectAvailableTypes,
	selectTypes,
	toggleFilter,
} from "../../actions/filter";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
import CheckBox from "../CheckBox";
import Logo from "../Logo";
import styles from "./styles.module.scss";
import { selectDarkMode, toggleDarkMode } from "../../actions/darkMode";
import { toggleViewMembers } from "../../actions/modal";

const SideBar = () => {
	const availableFilters = useSelector(selectAvailableTypes);
	const checkedFilters = useSelector(selectTypes);
	const dispatch = useDispatch();
	const darkMode = useSelector(selectDarkMode);

	const filterElements = availableFilters.map((filter, index) => {
		const clickHandler = () => {
			dispatch(toggleFilter(filter));
		};
		const checked = checkedFilters.indexOf(filter) !== -1;
		return (
			<div className={styles.filter} key={index}>
				<CheckBox checked={checked} clickHandler={clickHandler} />{" "}
				{filter} {"Blogs"}
			</div>
		);
	});

	const darkModeClickHandler = () => {
		dispatch(toggleDarkMode());
	};

	const viewMembersClickHandler = () => {
		dispatch(toggleViewMembers());
	};

	return (
		<div className={styles.sidebar}>
			<Logo />
			<div className={styles.filters}>
				<h5>{HOME_CONSTANTS.FILTER_TITLE}</h5>
				{filterElements}
			</div>
			<div className={styles.otherOptions}>
				<span onClick={viewMembersClickHandler}>
					{HOME_CONSTANTS.VIEW_MEMBERS}
				</span>
				<span onClick={darkModeClickHandler}>
					{darkMode
						? HOME_CONSTANTS.LIGHT_MODE
						: HOME_CONSTANTS.DARK_MODE}
				</span>
			</div>
		</div>
	);
};

export default SideBar;
