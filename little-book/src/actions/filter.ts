import { createSlice } from "@reduxjs/toolkit";
import { HOME_CONSTANTS } from "../constants/pageConstants";
import { AppState } from "../store";

/*
	@author Aravindhan A
	@description This file contains the Redux state and reducers to handle the state of filter and blog types.
*/

const filterSlice = createSlice({
	name: "filter",
	initialState: {
		query: "",
		types: HOME_CONSTANTS.FILTERS,
	},
	reducers: {
		toggleFilter: (state, action) => {
			// To toggle a blog type from filter
			const filter = action.payload.type;
			const filterIndex = state.types.indexOf(filter);
			if (action.payload.include) {
				if (filterIndex === -1) state.types.push(filter);
			} else {
				if (filterIndex !== -1) {
					state.types.splice(filterIndex, 1);
				}
			}
		},
		setQuery: (state, action) => {
			// To set the search query
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
