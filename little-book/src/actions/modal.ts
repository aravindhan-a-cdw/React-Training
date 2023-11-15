import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

const userActionSlice = createSlice({
	name: "userActions",
	initialState: {
		viewMembers: false,
		addNewBlog: false,
		showModal: false,
	},
	reducers: {
		toggleViewMembers: (state) => {
			state.viewMembers = !state.viewMembers;
			state.showModal = state.viewMembers;
		},
		toggleAddNewBlog: (state) => {
			state.addNewBlog = !state.addNewBlog;
			state.showModal = state.addNewBlog;
		},
	},
});

const selectViewMembers = (state: AppState) => state.modal.viewMembers;
const selectAddNewBlog = (state: AppState) => state.modal.addNewBlog;
const selectShowModal = (state: AppState) => state.modal.showModal;

export const { toggleViewMembers, toggleAddNewBlog } = userActionSlice.actions;
export { selectAddNewBlog, selectViewMembers, selectShowModal };

export default userActionSlice.reducer;
