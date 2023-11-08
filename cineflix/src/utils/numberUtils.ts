/*
	@author Aravindhan A
	@description This file contains utils to show the timer
*/

const counterFormater = (s: number) => {
	return (s - (s %= 60)) / 60 + (9 < s ? "0:" : "0:0") + s;
};

export { counterFormater };
