import { json } from "react-router-dom";
import { MOVIES_URL, TEASERS_URL } from "../constants/serviceConstants";

/*
    @author Aravindhan A
    @description This file contains the service for getting movies data from API
*/

const movieServices = {
	// This service returns all the movies.
	movieService: async (pageNumber: number) => {
		const response = await fetch(MOVIES_URL);
		if (response.status !== 200) {
			throw json(
				{ error: "Some text" },
				{ status: 500, statusText: "Couldn't fetch movies!" }
			);
			// throw new ErrorResponseImpl(status: 500,statusText:"Error while fetching data", data: "");
		}
		const result = (await response.json()) as Array<any>;
		return result.slice(Math.max((pageNumber - 1) * 6), pageNumber * 6);
	},
	// This service return all the teasers
	teaserService: async () => {
		const response = await fetch(TEASERS_URL);
		if (response.status !== 200) {
			throw json(
				{},
				{ status: 500, statusText: "Couldn't fetch teasers data!" }
			);
		}
		return await response.json();
	},
};

export default movieServices;
