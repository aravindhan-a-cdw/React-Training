import { configureStore } from "@reduxjs/toolkit";
import filterReducer, { initialState, selectFilter } from "../filter.ts";

test("testing filter selectors", () => {
	const store = configureStore({ reducer: { filter: filterReducer } });
	expect(selectFilter(store.getState())).toBe(initialState);
});

test("filter reducer should return the initial state", () => {
	expect(filterReducer(undefined, { type: undefined })).toEqual(initialState);
});

test("filter reducer should handle toggleFilter", () => {
	expect(
		filterReducer(initialState, {
			type: "filter/toggleFilter",
			payload: { type: "test", include: true },
		})
	).toEqual({
		...initialState,
		types: ["test"],
	});

	expect(
		filterReducer(initialState, {
			type: "filter/toggleFilter",
			payload: { type: "test", include: false },
		})
	).toEqual({
		...initialState,
		types: [],
	});
});
