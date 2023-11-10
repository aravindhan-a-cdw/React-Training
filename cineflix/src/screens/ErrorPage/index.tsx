import { ErrorResponse, useRouteError } from "react-router";
import styles from "./styles.module.scss";

/*
	@author Aravindhan A
	@description This component renders the error page
*/

const Error = () => {
	const error = useRouteError() as ErrorResponse | Error;
	console.log(error);
	return (
		<div className={styles.container}>
			{"status" in error ? (
				error.status !== 404 ? (
					<>
						<h1>Some error occurred</h1>
						<h2>
							{error.status} {error.statusText}
						</h2>
					</>
				) : (
					<h1>404 Not Found</h1>
				)
			) : (
				<h1>Some unexpected error occurred!</h1>
			)}
		</div>
	);
};

export default Error;
