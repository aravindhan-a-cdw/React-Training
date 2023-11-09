import { json } from "react-router-dom";
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
			if (response.status !== 200)
				throw json(
					{ error: "Couldn't fetch categories!" },
					{ status: response.status }
				);
			return await response.json();
		} catch (error) {
			throw json(
				{ error: "Couldn't fetch or parse categories!" },
				{ status: 500 }
			);
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
			if (response.status !== 200)
				throw json(
					{ error: `Couldn't get products of category ${category}` },
					{ status: response.status }
				);
			return await response.json();
		} catch (err) {
			throw json(
				{ error: `Couldn't get products of category ${category}` },
				{ status: 500 }
			);
		}
	},
};

export default productServices;
