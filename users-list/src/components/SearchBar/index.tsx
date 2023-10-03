import search from "@src/assets/search.png";
import "./style.css";

function SearchBar() {
	return (
		<div className="search-bar">
			<img src={search} alt="A lens logo for searching" />
			<input
				className="search-input"
				type="text"
				placeholder="Search users"
			/>
		</div>
	);
}

export default SearchBar;
