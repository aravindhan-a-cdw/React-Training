import styles from "./styles.module.scss";
import { setQuery, selectQuery } from "../../actions/filter";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import React from "react";

/*
	@author Aravindhan A
	@description This component renders a search bar for user to input search query.
*/

type SearchBarProps = {
	placeholder?: string;
	className?: string;
};

const SearchBar = React.memo((props: SearchBarProps) => {
	// prop destructuring
	const { placeholder, className = "" } = props;

	// hooks initialization
	const dispatch = useDispatch();
	const inputRef = useRef<HTMLInputElement>(null);

	// get state from stores
	const query = useSelector(selectQuery);

	const changeHandler = (event: React.KeyboardEvent) => {
		// handler to set query on press of "Enter" key
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
});

export default SearchBar;
