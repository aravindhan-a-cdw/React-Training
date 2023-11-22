import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

/*
	@author Aravindhan A
	@description This file contains the Redux state and reducers to handle theme info of the application
*/

const darkModeSlice = createSlice({
	name: "darkMode",
	initialState: false,
	reducers: {
		toggleDarkMode: (state) => {
			// To toggle the theme state
			return !state;
		},
	},
});

const selectDarkMode = (state: AppState) => state.darkMode;

export const { toggleDarkMode } = darkModeSlice.actions;
export { selectDarkMode };

export default darkModeSlice.reducer;
