import { ErrorResponse, useRouteError } from "react-router-dom";
import styles from "./styles.module.scss";

const ErrorPage = () => {
	const error = useRouteError() as ErrorResponse;

	return (
		<div className={styles.container}>
			<h3>Something went wrong!</h3>
			<p>{error?.data.error || ""}</p>
		</div>
	);
};

export default ErrorPage;
