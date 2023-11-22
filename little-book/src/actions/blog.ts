import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

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
};

const initialState = {
	blogs: [],
	selectedBlog: null,
	editMode: false,
};

const blogSlice = createSlice({
	name: "blog",
	initialState: initialState as StateType,
	reducers: {
		setBlogs: (state, action) => {
			// To set the blogs
			state.blogs = action.payload;
		},
		setSelectedBlog: (state, action) => {
			// To select a blog
			state.selectedBlog = action.payload;
		},
		editBlog: (state, action) => {
			// To edit a blog
			state.blogs[action.payload.index] = action.payload.blogData;
		},
		addBlog: (state, action: { type: string; payload: BlogData }) => {
			// To add a new blog in the blogs list
			state.blogs = [action.payload, ...state.blogs];
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

export const { setBlogs, setSelectedBlog, addBlog, editBlog, toggleEditMode } =
	blogSlice.actions;
export { selectBlogs, selectSelectedBlog, selectBlogEditMode };
export default blogSlice.reducer;
