import styles from "./styles.module.scss";
import store from "../../store";
import { setQuery, selectQuery } from "../../actions/filter";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

type SearchBarProps = {
	placeholder?: string;
	className?: string;
};

// const selectQuery = (state: AppState) => state.filter.query;

const SearchBar = (props: SearchBarProps) => {
	const { placeholder, className = "" } = props;
	const inputRef = useRef<HTMLInputElement>(null);
	const query = useSelector(selectQuery);
	const dispatch = useDispatch();

	store.subscribe(() => {
		console.log(store.getState());
	});

	const changeHandler = (event: React.KeyboardEvent) => {
		console.log(event.code);
		if (event.key === "Enter") {
			const trimmedValue = inputRef.current!.value.trimStart();
			dispatch(setQuery(trimmedValue));
		}
	};

	return (
		<input
			ref={inputRef}
			className={`${styles.searchBar} ${className}`}
			placeholder={placeholder}
			onKeyUp={changeHandler}
			defaultValue={query}
		></input>
	);
};

export default SearchBar;
