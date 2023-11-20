import styles from "./style.module.scss";
import { TRAILER_CONSTANTS } from "../../constants/componentConstants";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

/*
	@author Aravindhan A
	@description This component renders the a video and its title description
*/

type TrailerProps = {
	className?: string;
};

const Trailer = (props: TrailerProps) => {
	const { className = "" } = props;
	const navigate = useNavigate();

	const watchNowHandler = () => {
		// Handler to navigate user to now-showing page.
		navigate("/now-showing");
	};
	return (
		<div className={`${styles.trailerContainer} ${className}`}>
			<div className={styles.imageContainer}></div>
			<div className={styles.content}>
				<h5>{TRAILER_CONSTANTS.TITLE}</h5>
				<p>{TRAILER_CONSTANTS.DESCRIPTION}</p>
				<Button onClick={watchNowHandler}>Watch Now</Button>
			</div>
		</div>
	);
};

export default Trailer;
