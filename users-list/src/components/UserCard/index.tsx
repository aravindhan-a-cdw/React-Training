import styles from "./style.module.css";

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
	return (
		<div className={styles.user_card}>
			<img src={image} alt="User Profile" />
			<div className={styles.user_content}>
				<span className={styles.user_name}>{name}</span>
				<span className={styles.user_location}>{location}</span>
				<ul className={styles.interests}>
					{interests.map((interest, index) => (
						<span key={index}>{interest}</span>
					))}
				</ul>
			</div>
		</div>
	);
}

export default UserCard;
