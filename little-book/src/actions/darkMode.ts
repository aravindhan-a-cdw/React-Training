import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
	name: "darkMode",
	initialState: false,
	reducers: {
		toggle: (state) => {
			return !state;
		},
	},
});

export const { toggle } = darkModeSlice.actions;

export default darkModeSlice.reducer;
