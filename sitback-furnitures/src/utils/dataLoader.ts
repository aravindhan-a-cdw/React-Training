import productServices from "../services/productServices";

const allProductsDataLoader = async () => {
	return await productServices.getAllCategories().then(async (categories) => {
		const data = await Promise.all(
			categories.map((data: any) =>
				productServices.getProductsByCategory(data.id)
			)
		);
		return data.reduce((total, products, idx, []) => [
			...total,
			...products,
		]);
	});
	// const data = categories.map(
	// 	(data: any) =>
	// 		productServices.getProductsByCategory(data.id)
	// );
	// return data;
};

export { allProductsDataLoader };
