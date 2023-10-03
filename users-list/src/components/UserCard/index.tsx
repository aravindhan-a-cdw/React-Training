import "./style.css";

type UserProps = {
	data: {
		name: string;
		location: string;
		interests: Array<string>;
		image: string;
	};
	selected: boolean;
	onClick: () => void;
};

function UserCard(props: UserProps) {
	const {
		data: { name, location, interests, image },
		selected,
		onClick,
	} = props;
	return (
		<div
			className={`user-card ${selected ? "selected" : ""}`}
			onClick={onClick}
		>
			<img src={image} alt="User Profile" />
			<div className="user-content">
				<span className="user-name">{name}</span>
				<span className="user-location">{location}</span>
				<ul className="interests">
					{interests.map((interest, index) => (
						<span key={index}>{interest}</span>
					))}
				</ul>
			</div>
		</div>
	);
}

export default UserCard;
