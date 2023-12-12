import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import {
	selectAddNewBlog,
	selectShowModal,
	selectViewMembers,
	setClickOutsideModal,
} from "../../actions/modal";
import MembersList from "../../containers/MembersList";
import { SyntheticEvent, useRef } from "react";
import NewBlog from "../NewBlog";
import { selectDarkMode } from "../../actions/darkMode";

/**
 * This component renders the SideModal.
 */
const SideModal = () => {
	// hooks initialization
	const dispatch = useDispatch();
	const outsideModalRef = useRef<HTMLDivElement>(null);

	// get state from stores
	const darkMode = useSelector(selectDarkMode);
	const showModal = useSelector(selectShowModal);
	const viewMembers = useSelector(selectViewMembers);
	const addNewBlog = useSelector(selectAddNewBlog);

	const closeModalHandler = (event: SyntheticEvent) => {
		// handler to say the content element that the user have clicked outside of the SideModal
		// the content will decide if a Confirmation modal needs to be shown or to close the SideModal
		if (event.target === outsideModalRef.current) {
			dispatch(setClickOutsideModal(true));
		}
	};

	if (showModal) {
		return (
			<div
				ref={outsideModalRef}
				onClick={closeModalHandler}
				className={`${styles.modalContainer} ${
					darkMode ? styles.dark : ""
				}`}
			>
				<div className={styles.modal}>
					{viewMembers && <MembersList />}
					{addNewBlog && <NewBlog />}
				</div>
			</div>
		);
	} else {
		return <></>;
	}
};

export default SideModal;
