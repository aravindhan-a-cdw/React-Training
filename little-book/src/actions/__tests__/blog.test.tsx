import { configureStore } from "@reduxjs/toolkit";
import blogReducer, {
	initialState,
	selectBlogs,
	selectAvailableTypes,
	selectBlogEditMode,
	selectSelectedBlog,
} from "../blog.ts";

test("testing selectors", () => {
	const store = configureStore({ reducer: { blog: blogReducer } });
	expect(selectBlogs(store.getState())).toBe(initialState.blogs);
	expect(selectAvailableTypes(store.getState())).toBe(
		initialState.availableTypes
	);
	expect(selectBlogEditMode(store.getState())).toBe(initialState.editMode);
	expect(selectSelectedBlog(store.getState())).toBe(
		initialState.selectedBlog
	);
});

test("should return the initial state", () => {
	expect(blogReducer(undefined, { type: undefined })).toEqual(initialState);
});

test("should handle addBlog", () => {
	const blogData = {
		id: "1",
		title: "title",
		details: "details",
		photo: "photo",
		type: "local",
	};
	expect(
		blogReducer(initialState, {
			type: "blog/addBlog",
			payload: blogData,
		})
	).toEqual({
		...initialState,
		availableTypes: ["local"],
		blogs: [blogData],
	});
});

test("should handle editBlog", () => {
	const blogData = {
		id: "1",
		title: "title",
		details: "details",
		photo: "photo",
		type: "local",
	};
	const state = {
		...initialState,
		blogs: [blogData],
	};
	expect(
		blogReducer(state, {
			type: "blog/editBlog",
			payload: { blogData, id: "1" },
		})
	).toEqual({
		...initialState,
		availableTypes: ["local"],
		blogs: [blogData],
	});
});

test("testing setSelectedBlog", () => {
	expect(
		blogReducer(initialState, {
			type: "blog/setSelectedBlog",
			payload: "1",
		})
	).toEqual({
		...initialState,
		selectedBlog: "1",
	});
});

test("testing toggleEditMode", () => {
	expect(
		blogReducer(initialState, {
			type: "blog/toggleEditMode",
		})
	).toEqual({
		...initialState,
		editMode: true,
	});
});

test("testing setBlogs", () => {
	const blogData = {
		id: "1",
		title: "title",
		details: "details",
		photo: "photo",
		type: "local",
	};
	expect(
		blogReducer(initialState, {
			type: "blog/setBlogs",
			payload: [blogData],
		})
	).toEqual({
		...initialState,
		availableTypes: ["local"],
		blogs: [blogData],
	});
});
