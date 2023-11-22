import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import {
	closeModal,
	selectAddNewBlog,
	selectShowModal,
	selectViewMembers,
} from "../../actions/modal";
import MembersList from "../../containers/MembersList";
import { SyntheticEvent, useRef, useState } from "react";
import NewBlog from "../NewBlog";
import { selectDarkMode } from "../../actions/darkMode";
import Modal from "../Modal";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
import Button from "../Button";

const SideModal = () => {
	const [showConfirmationModal, setShowConfirmationModal] = useState(false);
	const dispatch = useDispatch();

	const darkMode = useSelector(selectDarkMode);
	const showModal = useSelector(selectShowModal);
	const viewMembers = useSelector(selectViewMembers);
	const addNewBlog = useSelector(selectAddNewBlog);

	const outsideModalRef = useRef<HTMLDivElement>(null);

	const closeModalHandler = (event: SyntheticEvent) => {
		if (event.target === outsideModalRef.current) {
			if (addNewBlog) {
				setShowConfirmationModal(true);
			} else dispatch(closeModal());
		}
	};

	const discardAddingHandler = () => {
		dispatch(closeModal());
		setShowConfirmationModal(false);
	};

	const continueAddingHandler = () => {
		setShowConfirmationModal(false);
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
				{showConfirmationModal && (
					<Modal
						closeModalHandler={() =>
							setShowConfirmationModal(false)
						}
					>
						<div className={styles.modalHeader}>
							<h6>{HOME_CONSTANTS.MODAL_TITLE_CONFIRM}</h6>
						</div>
						<div className={styles.modalBody}>
							<h5>{HOME_CONSTANTS.MODAL_CONFIRM_MESSAGE}</h5>
							<div className={styles.buttons}>
								<Button
									clickHandler={discardAddingHandler}
									type="primary"
								>
									{HOME_CONSTANTS.MODAL_CONFIRM_YES}
								</Button>
								<Button
									clickHandler={continueAddingHandler}
									type="secondary"
								>
									{HOME_CONSTANTS.MODAL_CONFIRM_NO}
								</Button>
							</div>
						</div>
					</Modal>
				)}
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
