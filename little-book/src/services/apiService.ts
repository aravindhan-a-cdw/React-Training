/*
    @author Aravindhan A
    @description This is a service file to get api data of blogs and members.
*/

import { json } from "react-router-dom";
import { BLOG_URL, USERS_URL } from "../constants/serviceConstants";

const apiService = {
	getBlogs: async () => {
		// This is to get list of blogs from the api and return the data.
		const response = await fetch(BLOG_URL);
		if (response.status !== 200) {
			throw json(
				{},
				{ status: response.status, statusText: "Couldn't fetch blogs!" }
			);
		}
		const jsonData = response.json();
		return jsonData;
	},

	getUsers: async () => {
		// This is to get list of users and returns the data.
		const response = await fetch(USERS_URL);
		if (response.status !== 200) {
			throw json(
				{},
				{ status: response.status, statusText: "Couldn't fetch users!" }
			);
		}
		const jsonData = response.json();
		return jsonData;
	},
};

export default apiService;
