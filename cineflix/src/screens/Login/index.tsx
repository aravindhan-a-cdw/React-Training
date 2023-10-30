import Button from "../../components/Button";
import styles from "./styles.module.scss";
import image from "./sindel-background.png";
import Input from "../../components/Input";
import { LOGIN_CONSTANTS } from "../../constants/pageConstants";
import { Form, Navigate, json, useActionData } from "react-router-dom";
import authServices from "../../services/authService";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../stores/AuthContext";

const Login = () => {
	const actionData = useActionData() as {
		email: "";
		password: "";
		message: "";
		username: "";
	};

	const { dispatch } = useContext(AuthContext);

	useEffect(() => {
		if (actionData && actionData.username) {
			dispatch({
				type: "LOGIN",
				payload: {
					username: actionData.username,
					isAuthenticated: true,
				},
			});
		}
	}, [actionData, dispatch]);

	if (actionData && actionData.username) {
		return <Navigate to={"/"} />;
	}

	return (
		<div className={styles.page_container}>
			<img src={image} alt="Sindel" />
			<div className={styles.login_form_container}>
				<Form method="post">
					<h3>{LOGIN_CONSTANTS.TITLE}</h3>
					<p>{LOGIN_CONSTANTS.DESCRIPTION}</p>
					<div>
						<label htmlFor="email">Email</label>
						<Input
							className={`${styles.form_input} ${
								actionData && actionData.email
									? styles.error
									: ""
							}`}
							type="email"
							id="email"
							name="email"
						/>
						{actionData && actionData.email ? (
							<p className={styles.error_message}>
								{actionData.email}
							</p>
						) : (
							""
						)}

						<label htmlFor="password">Password</label>
						<Input
							className={`${styles.form_input} ${
								actionData && actionData.password
									? styles.error
									: ""
							}`}
							type="password"
							id="password"
							name="password"
						/>
						{actionData && actionData.password ? (
							<p className={styles.error_message}>
								{actionData.password}
							</p>
						) : (
							""
						)}
						{actionData && actionData.message ? (
							<p className={styles.error_message}>
								{actionData.message}
							</p>
						) : (
							""
						)}
					</div>
					<Button className={styles.login_btn}>Login</Button>
				</Form>
			</div>
		</div>
	);
};

export const loginAction = async ({ params, request }: any) => {
	console.log(params, request);
	const formData = await request.formData();
	const email = formData.get("email");
	let hasError = false;
	const password = formData.get("password");

	const errors = { email: "", password: "" };

	// validate the fields
	if (typeof email !== "string" || !email.includes("@")) {
		hasError = true;
		errors.email = "That doesn't look like an email address";
	}

	if (typeof password !== "string" || password.length < 6) {
		hasError = true;
		errors.password = "Password must be > 6 characters";
	}

	// return data if we have errors
	if (hasError) {
		return errors;
	}
	const response = authServices.loginService(email, password);
	if (response.error) {
		return json(
			{ message: "Email or password is incorrect!" },
			{ status: 401 }
		);
	}
	console.log(response);
	return response;
};

export const logoutAction = (dispatch: any) => {
	dispatch({ type: "LOGOUT" });
	return { success: true };
};

export default Login;
