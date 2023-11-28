import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { selectDarkMode } from "../../actions/darkMode";
import { SyntheticEvent, useRef } from "react";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
// import Button from "../Button";

/*
	@author Aravindhan A
	@description This component renders a modal in the middle of the page.
*/

type ModalProps = {
	closeModalHandler: () => void;
	header: React.ReactNode;
	body: React.ReactNode;
	footer: React.ReactNode;
};

const Modal = (props: ModalProps) => {
	// props destructuring
	const { closeModalHandler, header, body, footer } = props;

	// get states from stores
	const darkMode = useSelector(selectDarkMode);

	const clickHandler = (event: SyntheticEvent) => {
		// handler to call the close modal handler function from parent when the user clicks outside of the Modal
		if (event.target === outsideModalRef.current) {
			closeModalHandler();
		}
	};

	const outsideModalRef = useRef<HTMLDivElement>(null);
	return (
		<div
			ref={outsideModalRef}
			onClick={clickHandler}
			className={`${styles.modalContainer} ${
				darkMode ? styles.dark : ""
			}`}
		>
			<div className={styles.modal}>
				<div className={styles.modalHeader}>
					<h6>{header}</h6>
					<span onClick={closeModalHandler}>
						{HOME_CONSTANTS.MODAL_CLOSE}
					</span>
				</div>
				<div className={styles.modalBody}>
					<p>{body}</p>
				</div>
				<div className={styles.modalFooter}>{footer}</div>
			</div>
		</div>
	);
};

export default Modal;
