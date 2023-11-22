import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import apiService from "../../services/apiService";
import MemberCard from "../../components/MemberCard";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectClickOutsideModal } from "../../actions/modal";

type MemberData = {
	name: string;
	photo: string;
	company: {
		name: string;
		location: string;
	};
};

const MembersList = () => {
	const dispatch = useDispatch();
	const [members, setMembers] = useState<Array<MemberData>>([]);
	const [isLoading, setIsLoading] = useState(true);
	const clickedOutsideModal = useSelector(selectClickOutsideModal);

	useEffect(() => {
		apiService.getUsers().then((data) => {
			setMembers(data);
			setIsLoading(false);
		});
	}, []);

	useEffect(() => {
		if (clickedOutsideModal) {
			dispatch(closeModal());
		}
	}, [clickedOutsideModal, dispatch]);

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
