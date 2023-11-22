import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import styles from "./styles.module.scss";
import { addBlog } from "../../actions/blog";
import { useDispatch, useSelector } from "react-redux";
import {
	closeModal,
	selectClickOutsideModal,
	setClickOutsideModal,
} from "../../actions/modal";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
import uuidv4 from "../../utils/uuid";
import Modal from "../Modal";

/*
	@author Aravindhan A
	@description This component renders the fields when creating a new blog. This will be used in SideModal.
*/

const NewBlog = () => {
	// initialize states and hooks
	const dispatch = useDispatch();
	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const [showConfirmationModal, setShowConfirmationModal] = useState(false);

	// get state from stores
	const clickedOutsideModal = useSelector(selectClickOutsideModal);

	// useEffect calls
	useEffect(() => {
		if (clickedOutsideModal) {
			if (
				inputRef.current?.value.trim() === "" &&
				textareaRef.current?.value.trim() === ""
			) {
				dispatch(closeModal());
			}
			setShowConfirmationModal(true);
		}
	}, [clickedOutsideModal, dispatch]);

	const addHandler = () => {
		// handler to add a new blog to the list of blogs
		const titleValue = inputRef.current?.value?.trim();
		const detailValue = textareaRef.current?.value?.trim();

		if (titleValue === undefined || detailValue === undefined) return;

		const blogData = {
			id: uuidv4(),
			title: titleValue,
			details: detailValue,
			type: "Local",
		};
		dispatch(addBlog(blogData));
		dispatch(closeModal());
	};

	const closeConfirmationModalHandler = () => {
		// handler to close the confirmation modal
		setShowConfirmationModal(false);
		dispatch(setClickOutsideModal(false)); // Explicity setting false since the user wants to continue editing
	};

	const continueAddingHandler = () => {
		// handler to prevent closing of the SideModal and continue editing
		setShowConfirmationModal(false);
		dispatch(setClickOutsideModal(false));
	};

	const discardAddingHandler = () => {
		// handler to discard the changes and close the SideModal
		setShowConfirmationModal(false);
		dispatch(closeModal()); // It sets the clickOutsideModal to false implicity - so doesn't trigger the confirmation modal
	};

	return (
		<div className={styles.newBlogContainer}>
			<h3>{HOME_CONSTANTS.NEW_BLOG}</h3>
			<input
				ref={inputRef}
				placeholder={HOME_CONSTANTS.NEW_BLOG_TITLE_PLACEHOLDER}
				type="text"
			/>
			<textarea
				ref={textareaRef}
				placeholder={HOME_CONSTANTS.NEW_BLOG_CONTENT_PLACEHOLDER}
			></textarea>
			<Button clickHandler={addHandler} className={styles.addButton}>
				{HOME_CONSTANTS.ADD}
			</Button>
			{showConfirmationModal && (
				// Show the Confirmation model based on state
				<Modal closeModalHandler={closeConfirmationModalHandler}>
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
		</div>
	);
};

export default NewBlog;
