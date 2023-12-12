import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import apiService from "../../services/apiService";
import MemberCard from "../../components/MemberCard";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, selectClickOutsideModal } from "../../actions/modal";
import { HOME_CONSTANTS } from "../../constants/pageConstants";

/*
	@author Aravindhan A
	@description This component renders the list of blog members
*/

type MemberData = {
	name: string;
	photo: string;
	company: {
		name: string;
		location: string;
	};
};

const MembersList = () => {
	// hooks and states initialization
	const dispatch = useDispatch();
	const [members, setMembers] = useState<Array<MemberData>>([]);
	const [isLoading, setIsLoading] = useState(true);

	// get state from store
	const clickedOutsideModal = useSelector(selectClickOutsideModal);

	// useEffect calls
	useEffect(() => {
		// runs once when the component is initially rendered to get data from api and store in state
		apiService.getUsers().then((data) => {
			setMembers(data);
			setIsLoading(false);
		});
	}, []);

	useEffect(() => {
		// when user clicks outside of the SideModal it notifies this component so that we can close the modal
		if (clickedOutsideModal) {
			dispatch(closeModal());
		}
	}, [clickedOutsideModal, dispatch]);

	if (isLoading) {
		// loading content
		return (
			<div className={styles.loadingContainer}>
				{HOME_CONSTANTS.LOADING_TEXT}
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<h3>{HOME_CONSTANTS.MEMBERS_TITLE}</h3>
			<div className={styles.membersContainer}>
				{members.map((data, index) => {
					return <MemberCard key={index} {...data} />;
				})}
			</div>
		</div>
	);
};

export default MembersList;
