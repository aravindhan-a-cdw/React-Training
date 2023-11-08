import React from "react";
import { ReactNode, createContext, useReducer } from "react";

/*
	@author Aravindhan A
	@description This is Authentication Context which stores auth details of user in localstorage and shares it with context
*/

type AuthDataType = {
	isAuthenticated: boolean;
	username: string | null;
};

type AuthContextData = {
	authData: AuthDataType;
	dispatch: React.Dispatch<{ type: string; payload: AuthDataType }>;
};

const usernameLocal = localStorage.getItem("username");

const initialState = {
	isAuthenticated: usernameLocal !== null,
	username: usernameLocal ? JSON.parse(usernameLocal) : null,
};

const authReducer = (
	state: any,
	action: { type: string; payload: AuthDataType }
) => {
	switch (action.type) {
		case "LOGIN": {
			localStorage.setItem(
				"username",
				JSON.stringify(action.payload.username)
			);
			return {
				...state,
				username: action.payload.username,
				isAuthenticated: true,
			};
		}
		case "LOGOUT": {
			localStorage.removeItem("username");
			return {
				...state,
				username: null,
				isAuthenticated: false,
			};
		}
	}
};

const AuthContext = createContext<AuthContextData>({
	authData: { isAuthenticated: false, username: null },
	dispatch: () => {},
});

type AuthContextProviderProps = {
	children: ReactNode;
};

const AuthContextProvider = (props: AuthContextProviderProps) => {
	const { children } = props;
	const [authData, dispatch] = useReducer(authReducer, initialState);
	return (
		<AuthContext.Provider value={{ authData, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext };

export default AuthContextProvider;
