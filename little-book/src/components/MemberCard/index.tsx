import styles from "./styles.module.scss";
import { BASE_URL } from "../../constants/serviceConstants";
import fallbackImage from "../../assets/default-fallback-image.png";

type MemberProps = {
	name: string;
	photo: string;
	company: {
		name: string;
		location: string;
	};
};

const MemberCard = (props: MemberProps) => {
	const { name, photo, company } = props;
	return (
		<div className={styles.memberContainer}>
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
