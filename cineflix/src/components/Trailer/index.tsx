import styles from "./style.module.scss";
import { TRAILER_CONSTANTS } from "../../constants/componentConstants";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

type TrailerProps = {
	className?: string;
};

const Trailer = (props: TrailerProps) => {
	const { className = "" } = props;
	const navigate = useNavigate();

	const watchNowHandler = () => {
		navigate("/now-showing");
	};
	return (
		<div className={`${styles.trailer_container} ${className}`}>
			<div className={styles.image_container}></div>
			<div className={styles.content}>
				<h5>{TRAILER_CONSTANTS.TITLE}</h5>
				<p>{TRAILER_CONSTANTS.DESCRIPTION}</p>
				<Button onClick={watchNowHandler}>Watch Now</Button>
			</div>
		</div>
	);
};

export default Trailer;
