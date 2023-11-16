import { useLoaderData } from "react-router-dom";
import HomeLayout from "../../containers/HomeLayout";
import apiService from "../../services/apiService";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setBlogs } from "../../actions/blog";

type BlogData = {
	type: string;
	title: string;
	details: string;
	photo?: string;
};

const Home = () => {
	const data = useLoaderData() as Array<BlogData>;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setBlogs(data));
	}, [data, dispatch]);

	return <HomeLayout />;
};

export const loader = async () => {
	return await apiService.getBlogs();
};

export default Home;
