import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

const blogSlice = createSlice({
	name: "blog",
	initialState: {
		blogs: [],
		selectedBlog: 0,
	},
	reducers: {
		setBlogs: (state, action) => {
			state.blogs = action.payload;
		},
		setSelectedBlog: (state, action) => {
			if (action.payload < state.blogs.length)
				state.selectedBlog = action.payload;
		},
		editBlog: (state, action) => {
			console.log(action);
		},
	},
});

const selectBlogs = (state: AppState) => state.blog.blogs;
const selectSelectedBlog = (state: AppState) => state.blog.selectedBlog;

export const { setBlogs, setSelectedBlog, editBlog } = blogSlice.actions;
export { selectBlogs, selectSelectedBlog };
export default blogSlice.reducer;
