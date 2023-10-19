import AppConstants from "../constants/AppConstants";

// API service for getting data related to place and its temperature
const placesApiService = {
	// Service to get all places data
	getAllPlaces: async () => {
		let response = await fetch(AppConstants.API_All_PLACES_URL);
		return await response.json();
	},
	// Service to get details of a selected place
	getPlaceDetails: async (place: string) => {
		let response = await fetch(AppConstants.API_PLACE_URL + "/" + place);
		return await response.json();
	},
	// Service to get similar places to a selected place
	getSimilarPlaces: async (place: string) => {
		let response = await fetch(
			AppConstants.API_SIMILAR_PLACES_URL + "/" + place
		);
		return await response.json();
	},
	// Service to get weather of a selected place
	getWeather: async (place: string) => {
		let response = await fetch(AppConstants.API_WEATHER + place);
		if (response.status !== 200) {
			// throw Error("Couldn't get temperature for " + place);
			return "Not found";
		}
		let jsonResponse = await response.json();
		return jsonResponse["current"]["temp_c"];
	},
};

export default placesApiService;
