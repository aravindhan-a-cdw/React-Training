/*
	@author Aravindhan A
	@description This file contains utils functions for filtering
*/

type BlogData = {
	id: string;
	title: string;
	details: string;
	photo?: string;
	type: string;
};

/**
 *  This function gets blogs data and returns an array of different types of blogs available.
 *
 * @param {Array<BlogData>} blogs An array of blogs.
 */
const getAvailableTypes = (blogs: Array<BlogData>) => {
	// This function creates a array of unique available types from the given array
	const newTypes: Array<string> = [];
	blogs.forEach((blog) => {
		if (!newTypes.includes(blog.type)) {
			newTypes.push(blog.type);
		}
	});
	return newTypes;
};

export { getAvailableTypes };
