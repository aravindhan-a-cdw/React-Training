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
import { toggleFilter } from "../../actions/filter";

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
	const [addDisabled, setAddDisabled] = useState(true);

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
		dispatch(toggleFilter({ type: blogData.type, include: true }));
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

	const keyUpHandler = () => {
		if (
			inputRef.current?.value.trim() !== "" &&
			textareaRef.current?.value.trim() !== ""
		) {
			setAddDisabled(false);
		}
	};

	return (
		<div className={styles.newBlogContainer}>
			<h3>{HOME_CONSTANTS.NEW_BLOG}</h3>
			<input
				ref={inputRef}
				placeholder={HOME_CONSTANTS.NEW_BLOG_TITLE_PLACEHOLDER}
				type="text"
				onKeyUp={keyUpHandler}
			/>
			<textarea
				ref={textareaRef}
				placeholder={HOME_CONSTANTS.NEW_BLOG_CONTENT_PLACEHOLDER}
				onKeyUp={keyUpHandler}
			></textarea>
			<Button
				clickHandler={addHandler}
				disabled={addDisabled}
				className={styles.addButton}
			>
				{HOME_CONSTANTS.ADD}
			</Button>
			{showConfirmationModal && (
				// Show the Confirmation model based on state
				<Modal
					closeModalHandler={closeConfirmationModalHandler}
					header={HOME_CONSTANTS.MODAL_TITLE_CONFIRM}
					body={HOME_CONSTANTS.MODAL_CONFIRM_MESSAGE}
					primaryButtonText={HOME_CONSTANTS.MODAL_CONFIRM_YES}
					secondaryButtonText={HOME_CONSTANTS.MODAL_CONFIRM_NO}
					primaryButtonHandler={discardAddingHandler}
					secondaryButtonHandler={continueAddingHandler}
				/>
			)}
		</div>
	);
};

export default NewBlog;
