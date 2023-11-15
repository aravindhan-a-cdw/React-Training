import styles from "./styles.module.scss";
import { BASE_URL } from "../../constants/serviceConstants";
import fallbackImage from "../../assets/default-fallback-image.png";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../actions/darkMode";

type MemberProps = {
	name: string;
	photo: string;
	company: {
		name: string;
		location: string;
	};
};

const MemberCard = (props: MemberProps) => {
	const darkMode = useSelector(selectDarkMode);

	const { name, photo, company } = props;
	return (
		<div
			className={`${styles.memberContainer} ${
				darkMode ? styles.dark : ""
			}`}
		>
			<img
				src={BASE_URL + "/" + photo}
				onError={(event) => {
					event.currentTarget.src = fallbackImage;
				}}
				alt={name}
			/>
			<span className={styles.name}>{name}</span>
			<span className={styles.location}>{company.location}</span>
		</div>
	);
};

export default MemberCard;
