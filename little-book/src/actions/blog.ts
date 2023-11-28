import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { getAvailableTypes } from "../utils/filter_utils";

/*
	@author Aravindhan A
	@description This file contains the Redux state and reducers to handle the state of blog, editMode and the current selected blog.
*/

type BlogData = {
	id: string;
	title: string;
	details: string;
	photo?: string;
	type: string;
};

type StateType = {
	blogs: Array<BlogData>;
	selectedBlog: string | null;
	editMode: boolean;
	availableTypes: Array<string>;
};

const initialState = {
	blogs: [],
	selectedBlog: null,
	editMode: false,
	availableTypes: [],
};

const blogSlice = createSlice({
	name: "blog",
	initialState: initialState as StateType,
	reducers: {
		setBlogs: (state, action) => {
			// To set the blogs
			state.blogs = action.payload;
			const newTypes = getAvailableTypes(action.payload);
			state.availableTypes = newTypes;
		},
		setSelectedBlog: (state, action) => {
			// To select a blog
			state.selectedBlog = action.payload;
		},
		editBlog: (state, action) => {
			// To edit a blog
			const index = state.blogs.findIndex(
				(data) => data.id === action.payload.id
			);
			if (index !== -1) {
				state.blogs[index] = action.payload.blogData;
			}
		},
		addBlog: (state, action: { type: string; payload: BlogData }) => {
			// To add a new blog in the blogs list
			state.blogs = [action.payload, ...state.blogs];
			if (!state.availableTypes.includes(action.payload.type)) {
				state.availableTypes.push(action.payload.type);
			}
		},
		toggleEditMode: (state) => {
			// To toggle edit mode
			state.editMode = !state.editMode;
		},
	},
});

const selectBlogs = (state: AppState) => state.blog.blogs;
const selectSelectedBlog = (state: AppState) => state.blog.selectedBlog;
const selectBlogEditMode = (state: AppState) => state.blog.editMode;
const selectAvailableTypes = (state: AppState): Array<string> =>
	state.blog.availableTypes;

export const { setBlogs, setSelectedBlog, addBlog, editBlog, toggleEditMode } =
	blogSlice.actions;
export {
	selectBlogs,
	selectSelectedBlog,
	selectBlogEditMode,
	selectAvailableTypes,
};
export default blogSlice.reducer;
