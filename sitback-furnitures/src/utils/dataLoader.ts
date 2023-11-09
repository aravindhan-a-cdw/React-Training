import productServices from "../services/productServices";

// This function loads all the products from all categories.

const allProductsDataLoader = async () => {
	try {
		// Get all categories
		const categories = await productServices.getAllCategories();
		// Get all products of all categories.
		const data = await Promise.all(
			categories.map((data: any) =>
				productServices.getProductsByCategory(data.id)
			)
		);
		// Array of arrays to a single array of All products
		return data.reduce((total, products) => [...total, ...products]);
	} catch (err) {
		throw new Error("Couldn't get all products!");
	}
};

export { allProductsDataLoader };
