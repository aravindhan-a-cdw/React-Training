import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { selectDarkMode } from "../../actions/darkMode";
import { SyntheticEvent, useRef } from "react";

/*
	@author Aravindhan A
	@description This component renders a modal in the middle of the page.
*/

type ModalProps = {
	closeModalHandler: () => void;
	children: React.ReactNode;
};

const Modal = (props: ModalProps) => {
	// props destructuring
	const { closeModalHandler, children } = props;

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
			<div className={styles.modal}>{children}</div>
		</div>
	);
};

export default Modal;
