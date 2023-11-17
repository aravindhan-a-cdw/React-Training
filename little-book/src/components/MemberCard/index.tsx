import styles from "./styles.module.scss";
import { BASE_URL } from "../../constants/serviceConstants";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../actions/darkMode";
import Image from "../Image";

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
			<Image src={BASE_URL + "/" + photo} alt={name} />
			<span className={styles.name}>{name}</span>
			<span className={styles.location}>{company.location}</span>
		</div>
	);
};

export default MemberCard;
