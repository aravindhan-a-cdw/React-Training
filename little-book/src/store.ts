import { configureStore } from "@reduxjs/toolkit";
import darkMode from "./actions/darkMode";
import filter from "./actions/filter";

const store = configureStore({
	reducer: {
		darkMode,
		filter,
	},
});

export type AppState = ReturnType<typeof store.getState>;
export default store;
