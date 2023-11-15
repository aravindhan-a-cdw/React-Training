import { createSlice } from "@reduxjs/toolkit";
import { HOME_CONSTANTS } from "../constants/pageConstants";
import { AppState } from "../store";

const filterSlice = createSlice({
	name: "filter",
	initialState: {
		query: "",
		types: HOME_CONSTANTS.FILTERS,
	},
	reducers: {
		toggleFilter: (state, action) => {
			const filter = action.payload;
			const filterIndex = state.types.indexOf(filter);
			if (filterIndex === -1) {
				state.types.push(filter);
			} else {
				state.types.splice(filterIndex, 1);
			}
		},
		setQuery: (state, action) => {
			state.query = action.payload;
		},
	},
});

const selectQuery = (state: AppState) => state.filter.query;
const selectTypes = (state: AppState) => state.filter.types;
const selectFilter = (state: AppState) => state.filter;

export const { toggleFilter, setQuery } = filterSlice.actions;
export { selectQuery, selectTypes, selectFilter };

export default filterSlice.reducer;
