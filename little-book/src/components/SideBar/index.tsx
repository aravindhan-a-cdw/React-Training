import { useDispatch, useSelector } from "react-redux";
import { selectTypes, toggleFilter } from "../../actions/filter";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
import CheckBox from "../CheckBox";
import Logo from "../Logo";
import styles from "./styles.module.scss";
import { toggleDarkMode } from "../../actions/darkMode";
import { toggleViewMembers } from "../../actions/modal";

const SideBar = () => {
	const filters = useSelector(selectTypes);
	const dispatch = useDispatch();

	const filterElements = HOME_CONSTANTS.FILTERS.map((filter, index) => {
		const clickHandler = () => {
			dispatch(toggleFilter(filter));
		};
		const checked = filters.indexOf(filter) !== -1;
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
					{HOME_CONSTANTS.DARK_MODE}
				</span>
			</div>
		</div>
	);
};

export default SideBar;
