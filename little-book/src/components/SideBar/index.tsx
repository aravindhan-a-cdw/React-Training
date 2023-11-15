import { useDispatch, useSelector } from "react-redux";
import { selectTypes, toggleFilter } from "../../actions/filter";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
import CheckBox from "../CheckBox";
import Logo from "../Logo";
import styles from "./styles.module.scss";

const SideBar = () => {
	const filters = useSelector(selectTypes);
	const dispatch = useDispatch();

	const filterElements = HOME_CONSTANTS.FILTERS.map((filter, index) => {
		const clickHandler = () => {
			dispatch(toggleFilter(filter));
		};
		const checked = filters.indexOf(filter) !== -1;
		console.log(filter, filters, checked);
		return (
			<div className={styles.filter} key={index}>
				<CheckBox checked={checked} clickHandler={clickHandler} />{" "}
				{filter} {"Blogs"}
			</div>
		);
	});

	return (
		<div className={styles.sidebar}>
			<Logo />
			<div className={styles.filters}>
				<h5>Filter</h5>
				{filterElements}
			</div>
			<div className={styles.otherOptions}>
				<span>View Members</span>
				<span>Switch to Dark Mode</span>
			</div>
		</div>
	);
};

export default SideBar;
