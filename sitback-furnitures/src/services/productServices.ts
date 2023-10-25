import { BASE_URL } from "../constants/ServiceConstants";

/*
	@author Aravindhan A
	@description This file contains methods to get all categories of products and all products of each category.
*/

const productServices = {
	// Get all categories of products
	getAllCategories: async () => {
		const url = BASE_URL + "/categories";
		const response = await fetch(url);
		return await response.json();
	},
	// Get all products of a particular category
	getProductsByCategory: async (category: string) => {
		const url =
			BASE_URL +
			"/products?" +
			new URLSearchParams({ category: category });
		const response = await fetch(url);
		return await response.json();
	},
};

export default productServices;
