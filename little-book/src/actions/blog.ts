import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

type BlogData = {
	title: string;
	details: string;
	photo?: string;
	type?: string;
};

type StateType = {
	blogs: Array<BlogData>;
	selectedBlog: number;
};

const initialState = {
	blogs: [],
	selectedBlog: 0,
};

const blogSlice = createSlice({
	name: "blog",
	initialState: initialState as StateType,
	reducers: {
		setBlogs: (state, action) => {
			state.blogs = action.payload;
		},
		setSelectedBlog: (state, action) => {
			if (action.payload < state.blogs.length)
				state.selectedBlog = action.payload;
		},
		editBlog: (state, action) => {
			state.blogs[action.payload.index] = action.payload.blogData;
		},
		addBlog: (state, action: { type: string; payload: BlogData }) => {
			state.blogs = [...state.blogs, action.payload];
		},
	},
});

const selectBlogs = (state: AppState) => state.blog.blogs;
const selectSelectedBlog = (state: AppState) => state.blog.selectedBlog;

export const { setBlogs, setSelectedBlog, addBlog, editBlog } =
	blogSlice.actions;
export { selectBlogs, selectSelectedBlog };
export default blogSlice.reducer;
