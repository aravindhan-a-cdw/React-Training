import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { ERROR_CONSTANTS } from "../../constants/PageConstants";

function Error() {
	const [time, setTime] = useState(ERROR_CONSTANTS.TIME);
	const navigate = useNavigate();

	useEffect(() => {
		const interval = setInterval(() => {
			if (time === 0) {
				navigate("/");
			}
			setTime((time) => time - 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [time, navigate]);

	return (
		<div className={styles.container}>
			<p>404 Not Found!</p>
			<span>You will be redirected to home in {time} seconds!</span>
		</div>
	);
}

export default Error;
