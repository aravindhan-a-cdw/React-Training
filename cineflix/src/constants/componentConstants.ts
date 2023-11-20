const NAVBAR_CONSTANTS = {
	LINKS: [
		{ title: "Home", link: "", protected: false },
		{ title: "All Movies", link: "all-movies", protected: false },
		{ title: "Now Showing", link: "now-showing", protected: true },
	],
	LOGIN: "Login",
	LOGOUT: "Logout",
};

const TRAILER_CONSTANTS = {
	TITLE: "Sintel",
	DESCRIPTION:
		"Sintel tells the story of a friendship between a girl named Sintel, a baby dragon and the desparate lengths she will go to when that friendship is taken from her. Sintel is created by Blender in 2010 as a pet project to demonstrate Blender capabilities.",
};

const MOVIE_CONSTANTS = {
	LIKE: "Like",
	LIKES: "Likes",
};

export { NAVBAR_CONSTANTS, TRAILER_CONSTANTS, MOVIE_CONSTANTS };
