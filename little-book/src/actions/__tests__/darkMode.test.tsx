import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer, { initialState, selectDarkMode } from "../darkMode.ts";

test("testing darkmode selectors", () => {
	const store = configureStore({ reducer: { darkMode: darkModeReducer } });
	expect(selectDarkMode(store.getState())).toBe(initialState);
});

test("darkmode reducer should return the initial state", () => {
	expect(darkModeReducer(undefined, { type: undefined })).toEqual(
		initialState
	);
});

test("darkmode reducer should handle toggleDarkMode", () => {
	expect(
		darkModeReducer(initialState, {
			type: "darkMode/toggleDarkMode",
		})
	).toEqual(!initialState);

	expect(
		darkModeReducer(initialState, {
			type: "darkMode/toggleDarkMode",
		})
	).toEqual(!initialState);
});
