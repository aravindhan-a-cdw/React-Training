import { BASE_URL } from "../constants/ServiceConstants";

/*
	@author Aravindhan A
	@description This file contains methods to get all categories of products and all products of each category.
*/

const productServices = {
	// Get all categories of products
	getAllCategories: async () => {
		try {
			const url = BASE_URL + "/categories";
			const response = await fetch(url);
			return await response.json();
		} catch (error) {
			throw new Error("Couldn't fetch categories!");
		}
	},
	// Get all products of a particular category
	getProductsByCategory: async (category: string) => {
		try {
			const url =
				BASE_URL +
				"/products?" +
				new URLSearchParams({ category: category });
			const response = await fetch(url);
			return await response.json();
		} catch (err) {
			throw new Error(`Couldn't get products of category ${category}`);
		}
	},
};

export default productServices;
