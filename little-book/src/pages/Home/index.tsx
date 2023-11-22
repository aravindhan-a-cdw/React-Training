import { useLoaderData } from "react-router-dom";
import HomeLayout from "../../containers/HomeLayout";
import apiService from "../../services/apiService";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setBlogs, setSelectedBlog } from "../../actions/blog";

/*
	@author Aravindhan A
	@description This component renders the home page of the application
*/

type BlogData = {
	id: string;
	type: string;
	title: string;
	details: string;
	photo?: string;
};

const Home = () => {
	// load page data from router
	const data = useLoaderData() as Array<BlogData>;

	// hooks initialization
	const dispatch = useDispatch();

	// useEffect calls
	useEffect(() => {
		dispatch(setBlogs(data)); // set blogs list
		if (data.length > 0) dispatch(setSelectedBlog(data[0].id)); // set first blog as selected blog
	}, [data, dispatch]);

	return <HomeLayout />;
};

export const loader = async () => {
	return await apiService.getBlogs();
};

export default Home;
