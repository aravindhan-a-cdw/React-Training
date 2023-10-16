import styles from "./style.module.css";
import Badge from "../Badge";

type UserProps = {
	data: {
		name: string;
		location: string;
		interests: Array<string>;
		image: string;
	};
};

function UserCard(props: UserProps) {
	const {
		data: { name, location, interests, image },
	} = props;
	const MAX_BADGES = 6;
	const interestBadges = interests
		.slice(0, MAX_BADGES)
		.map((interest, index) => (
			<li>
				<Badge key={index}>{interest}</Badge>
			</li>
		));
	if (interests.length > MAX_BADGES)
		interestBadges.push(<Badge key={MAX_BADGES}>...</Badge>);
	return (
		<div className={styles.user_card}>
			<img src={image} alt="User Profile" />
			<div className={styles.user_content}>
				<span className={styles.user_name}>{name}</span>
				<span className={styles.user_location}>{location}</span>
				<ul className={styles.interests}>{interestBadges}</ul>
			</div>
		</div>
	);
}

export default UserCard;
