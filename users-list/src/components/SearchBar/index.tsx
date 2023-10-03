import search from "@src/assets/search.png";
import AppConstants from "@constants/AppConstants.ts";
import styles from "./style.module.css";

function SearchBar() {
	return (
		<div className={styles.search_bar}>
			<img src={search} alt="A lens logo for searching" />
			<input
				className={styles.search_input}
				type="text"
				placeholder={AppConstants.USER_SEARCH_PLACEHOLDER}
			/>
		</div>
	);
}

export default SearchBar;
