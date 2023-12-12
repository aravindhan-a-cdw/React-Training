import { configureStore } from "@reduxjs/toolkit";
import userActionReducer, {
	initialState,
	selectAddNewBlog,
	selectViewMembers,
	selectShowModal,
	selectClickOutsideModal,
} from "../modal.ts";

test("testing modal selectors", () => {
	const store = configureStore({
		reducer: { userActions: userActionReducer },
	});
	expect(selectAddNewBlog(store.getState())).toBe(initialState.addNewBlog);
	expect(selectViewMembers(store.getState())).toBe(initialState.viewMembers);
	expect(selectShowModal(store.getState())).toBe(initialState.showModal);
	expect(selectClickOutsideModal(store.getState())).toBe(
		initialState.clickOutsideModal
	);
});

test("modal reducer should return the initial state", () => {
	expect(userActionReducer(undefined, { type: undefined })).toEqual(
		initialState
	);
});

test("toggleAddNewBlog should toggle the addNewBlog state", () => {
	expect(
		userActionReducer(initialState, {
			type: "userActions/toggleAddNewBlog",
		})
	).toEqual({
		...initialState,
		addNewBlog: !initialState.addNewBlog,
		showModal: !initialState.addNewBlog,
	});
});

test("toggleViewMembers should toggle the viewMembers state", () => {
	expect(
		userActionReducer(initialState, {
			type: "userActions/toggleViewMembers",
		})
	).toEqual({
		...initialState,
		viewMembers: !initialState.viewMembers,
		showModal: !initialState.viewMembers,
	});
});

test("closeModal should close the modal", () => {
	expect(
		userActionReducer(initialState, {
			type: "userActions/closeModal",
		})
	).toEqual({
		...initialState,
		showModal: false,
	});
});

test("clickOutsideModal should set the clickOutsideModal state", () => {
	expect(
		userActionReducer(initialState, {
			type: "userActions/setClickOutsideModal",
			payload: true,
		})
	).toEqual({
		...initialState,
		clickOutsideModal: true,
	});
});
