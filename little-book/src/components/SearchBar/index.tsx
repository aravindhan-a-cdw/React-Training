import styles from "./styles.module.scss";
import store from "../../store";
import { setQuery, selectQuery } from "../../actions/filter";
import { useDispatch, useSelector } from "react-redux";

type SearchBarProps = {
	placeholder?: string;
	className?: string;
};

// const selectQuery = (state: AppState) => state.filter.query;

const SearchBar = (props: SearchBarProps) => {
	const { placeholder, className = "" } = props;
	const query = useSelector(selectQuery);
	const dispatch = useDispatch();

	store.subscribe(() => {
		console.log(store.getState());
	});

	const changeHandler = (event: { target: { value: string } }) => {
		const trimmedValue = event.target.value.trimStart();
		dispatch(setQuery(trimmedValue));
	};

	return (
		<input
			className={`${styles.searchBar} ${className}`}
			placeholder={placeholder}
			onChange={changeHandler}
			value={query}
		></input>
	);
};

export default SearchBar;
