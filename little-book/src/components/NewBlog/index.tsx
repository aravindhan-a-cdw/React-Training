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

const NewBlog = () => {
	const dispatch = useDispatch();
	const clickedOutsideModal = useSelector(selectClickOutsideModal);
	const [showConfirmationModal, setShowConfirmationModal] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const addHandler = () => {
		const titleValue = inputRef.current?.value.trim();
		const detailValue = textareaRef.current?.value.trim();

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

	const closeConfirmationModalHandler = () => {
		setShowConfirmationModal(false);
		dispatch(setClickOutsideModal(false));
	};

	const continueAddingHandler = () => {
		setShowConfirmationModal(false);
		dispatch(setClickOutsideModal(false));
	};

	const discardAddingHandler = () => {
		setShowConfirmationModal(false);
		dispatch(closeModal()); // It sets the clickOutsideModal to false
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
