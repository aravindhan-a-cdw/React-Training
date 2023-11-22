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

/*
	@author Aravindhan A
	@description This component renders the side bar or the section with logo filters and theme selection options.
*/

const SideBar = () => {
	// hook initialization
	const dispatch = useDispatch();

	// get states from stores
	const availableFilters = useSelector(selectAvailableTypes);
	const checkedFilters = useSelector(selectTypes);
	const darkMode = useSelector(selectDarkMode);

	const filterElements = availableFilters.map((filter, index) => {
		// list of filter elements to be rendered
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
		// handler to toggle theme
		dispatch(toggleDarkMode());
	};

	const viewMembersClickHandler = () => {
		// handler to open SideBar with MembersList content
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
