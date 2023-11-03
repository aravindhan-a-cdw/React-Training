import { useRouteError } from "react-router-dom";
import styles from "./styles.module.scss";

const ErrorPage = () => {
	const error = useRouteError() as Error;
	return (
		<div className={styles.container}>
			<h3>Something went wrong!</h3>
			<p>{error.message}</p>
		</div>
	);
};

export default ErrorPage;
