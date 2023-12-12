import configureStore from "./utils/configureStore";
import darkMode from "./actions/darkMode";
import filter from "./actions/filter";
import blog from "./actions/blog";
import modal from "./actions/modal";

const store = configureStore({
	reducer: {
		darkMode,
		filter,
		blog,
		modal,
	},
});

export type AppState = ReturnType<typeof store.getState>;
export default store;
