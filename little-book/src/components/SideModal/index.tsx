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

const SideModal = () => {
	const dispatch = useDispatch();

	const darkMode = useSelector(selectDarkMode);
	const showModal = useSelector(selectShowModal);
	const viewMembers = useSelector(selectViewMembers);
	const addNewBlog = useSelector(selectAddNewBlog);

	const outsideModalRef = useRef<HTMLDivElement>(null);

	const closeModalHandler = (event: SyntheticEvent) => {
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
