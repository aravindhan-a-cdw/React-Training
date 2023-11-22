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
		available_types: HOME_CONSTANTS.FILTERS,
	},
	reducers: {
		toggleFilter: (state, action) => {
			// To toggle a blog type from filter
			const filter = action.payload;
			const filterIndex = state.types.indexOf(filter);
			if (filterIndex === -1) {
				state.types.push(filter);
			} else {
				state.types.splice(filterIndex, 1);
			}
		},
		setQuery: (state, action) => {
			// To set the search query
			state.query = action.payload;
		},
		addNewBlogType: (state, action) => {
			// To add a new blog type to available types
			state.available_types = [...state.available_types, action.payload];
		},
	},
});

const selectQuery = (state: AppState) => state.filter.query;
const selectTypes = (state: AppState) => state.filter.types;
const selectFilter = (state: AppState) => state.filter;
const selectAvailableTypes = (state: AppState) => state.filter.available_types;

export const { toggleFilter, setQuery, addNewBlogType } = filterSlice.actions;
export { selectQuery, selectTypes, selectFilter, selectAvailableTypes };

export default filterSlice.reducer;
