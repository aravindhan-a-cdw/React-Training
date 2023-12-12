import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import loggerMiddleware from "./logger.js";
import { configureStore as createStore } from "@reduxjs/toolkit";

export default function configureStore(preloadedState) {
	const middlewares = [loggerMiddleware, thunkMiddleware];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancers);

	const store = createStore(preloadedState, composedEnhancers);

	return store;
}
