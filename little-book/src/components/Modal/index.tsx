import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import {
	closeModal,
	selectAddNewBlog,
	selectShowModal,
	selectViewMembers,
} from "../../actions/modal";
import MembersList from "../../containers/MembersList";
import { SyntheticEvent, useRef } from "react";

const Modal = () => {
	const dispatch = useDispatch();
	const showModal = useSelector(selectShowModal);
	const viewMembers = useSelector(selectViewMembers);
	const addNewBlog = useSelector(selectAddNewBlog);

	const outsideModalRef = useRef<HTMLDivElement>(null);

	const closeModalHandler = (event: SyntheticEvent) => {
		console.log(event.target);
		if (event.target === outsideModalRef.current) {
			dispatch(closeModal());
		}
	};

	if (showModal) {
		return (
			<div
				ref={outsideModalRef}
				onClick={closeModalHandler}
				className={styles.modalContainer}
			>
				<div className={styles.modal}>
					{viewMembers && <MembersList />}
					{addNewBlog && <div>Add New Blog</div>}
				</div>
			</div>
		);
	} else {
		return <></>;
	}
};

export default Modal;
