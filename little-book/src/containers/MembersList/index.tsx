import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import apiService from "../../services/apiService";
import MemberCard from "../../components/MemberCard";

type MemberData = {
	name: string;
	photo: string;
	company: {
		name: string;
		location: string;
	};
};

const MembersList = () => {
	const [members, setMembers] = useState<Array<MemberData>>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		apiService.getUsers().then((data) => {
			setMembers(data);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <div className={styles.loadingContainer}>Loading...</div>;
	} else {
		return (
			<div className={styles.container}>
				<h3>Members</h3>
				<div className={styles.membersContainer}>
					{members.map((data, index) => {
						return <MemberCard key={index} {...data} />;
					})}
				</div>
			</div>
		);
	}
};

export default MembersList;
