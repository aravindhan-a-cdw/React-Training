/*
	@author Aravindhan A
	@description This Service is used to login user
*/

const authServices = {
	// Service to login user
	loginService: (email: string, password: string) => {
		if (email.endsWith("@cdw.com") && password === "Welcome@123") {
			return {
				username: email.split("@")[0],
			};
		}
		return {
			error: "Email or password is incorrect!",
		};
	},
};

export default authServices;
