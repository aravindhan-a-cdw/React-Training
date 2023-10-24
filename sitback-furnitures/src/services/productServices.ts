import { BASE_URL } from "../constants/ServiceConstants";

const productServices = {
	getAllCategories: async () => {
		const url = BASE_URL + "/categories";
		const response = await fetch(url);
		return await response.json();
	},
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
