import { configureStore } from "@reduxjs/toolkit";
import darkMode from "./actions/darkMode";
import filter from "./actions/filter";
import blog from "./actions/blog";

const store = configureStore({
	reducer: {
		darkMode,
		filter,
		blog,
	},
});

export type AppState = ReturnType<typeof store.getState>;
export default store;
