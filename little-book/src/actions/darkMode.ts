import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

const darkModeSlice = createSlice({
	name: "darkMode",
	initialState: false,
	reducers: {
		toggleDarkMode: (state) => {
			return !state;
		},
	},
});

const selectDarkMode = (state: AppState) => state.darkMode;

export const { toggleDarkMode } = darkModeSlice.actions;
export { selectDarkMode };

export default darkModeSlice.reducer;
