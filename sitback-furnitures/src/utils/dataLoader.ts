import productServices from "../services/productServices";

// This function loads all the products from all categories.

const allProductsDataLoader = async () => {
	try {
		const categories = await productServices.getAllCategories();
		const data = await Promise.all(
			categories.map((data: any) =>
				productServices.getProductsByCategory(data.id)
			)
		);
		return data.reduce((total, products) => [...total, ...products]);
	} catch (err) {
		throw new Error("Couldn't get all products!");
	}
};

export { allProductsDataLoader };
