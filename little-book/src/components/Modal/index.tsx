import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { selectDarkMode } from "../../actions/darkMode";
import { SyntheticEvent, useRef } from "react";

type ModalProps = {
	closeModalHandler: () => void;
	children: React.ReactNode;
};

const Modal = (props: ModalProps) => {
	const { closeModalHandler, children } = props;
	const darkMode = useSelector(selectDarkMode);

	const clickHandler = (event: SyntheticEvent) => {
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
