import productServices from "../services/productServices";

// This function loads all the products from all categories.

const allProductsDataLoader = async () => {
	return await productServices.getAllCategories().then(async (categories) => {
		const data = await Promise.all(
			categories.map((data: any) =>
				productServices.getProductsByCategory(data.id)
			)
		);
		return data.reduce((total, products) => [...total, ...products]);
	});
};

export { allProductsDataLoader };
