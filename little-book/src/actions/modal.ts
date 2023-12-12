import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

export const initialState = {
	viewMembers: false,
	addNewBlog: false,
	showModal: false,
	clickOutsideModal: false,
};

const userActionSlice = createSlice({
	name: "userActions",
	initialState,
	reducers: {
		toggleViewMembers: (state) => {
			state.viewMembers = !state.viewMembers;
			state.showModal = state.viewMembers;
		},
		toggleAddNewBlog: (state) => {
			state.addNewBlog = !state.addNewBlog;
			state.showModal = state.addNewBlog;
		},
		closeModal: (state) => {
			state.showModal = false;
			state.viewMembers = false;
			state.addNewBlog = false;
			state.clickOutsideModal = false;
		},
		setClickOutsideModal: (state, action) => {
			state.clickOutsideModal = action.payload;
		},
	},
});

const selectViewMembers = (state: AppState) => state.modal.viewMembers;
const selectAddNewBlog = (state: AppState) => state.modal.addNewBlog;
const selectShowModal = (state: AppState) => state.modal.showModal;
const selectClickOutsideModal = (state: AppState) =>
	state.modal.clickOutsideModal;

export const {
	toggleViewMembers,
	toggleAddNewBlog,
	closeModal,
	setClickOutsideModal,
} = userActionSlice.actions;
export {
	selectAddNewBlog,
	selectViewMembers,
	selectShowModal,
	selectClickOutsideModal,
};

export default userActionSlice.reducer;
