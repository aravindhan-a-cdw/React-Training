import { ErrorResponse, useRouteError } from "react-router";
import styles from "./styles.module.scss";

const Error = () => {
	const error = useRouteError() as ErrorResponse;
	console.log(error);
	return (
		<div className={styles.container}>
			{error.status !== 404 ? <h1>Some Error Occurred</h1> : ""}
			<h2>
				{error.status} {error.statusText}
			</h2>
		</div>
	);
};

export default Error;
