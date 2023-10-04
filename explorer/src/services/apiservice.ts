import AppConstants from "../constants/AppConstants";

const Service = {
	getAllPlaces: async () => {
		let response = await fetch(AppConstants.API_All_PLACES_URL);
		return await response.json();
	},
	getPlaceDetails: async (place: string) => {
		let response = await fetch(AppConstants.API_PLACE_URL + "/" + place);
		return await response.json();
	},
	getSimilarPlaces: async (place: string) => {
		let response = await fetch(
			AppConstants.API_SIMILAR_PLACES_URL + "/" + place
		);
		return await response.json();
	},
	getWeather: async (place: string) => {
		let response = await fetch(AppConstants.API_WEATHER + place);
		if (response.status !== 200) {
			return 32;
		}
		let jsonResponse = await response.json();
		return jsonResponse["current"]["temp_c"];
	},
};

export default Service;
