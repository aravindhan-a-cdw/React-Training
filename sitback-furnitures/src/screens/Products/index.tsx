import { useParams } from "react-router";

const Products = () => {
	const { category } = useParams();
	return <div>Products Page for {category}</div>;
};

export default Products;
