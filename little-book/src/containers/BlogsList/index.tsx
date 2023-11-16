import BlogSummary from "../../components/BlogSummary";
import SearchBar from "../../components/SearchBar";
import styles from "./styles.module.scss";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../actions/filter";
import {
	selectBlogEditMode,
	selectBlogs,
	selectSelectedBlog,
	setSelectedBlog,
	toggleEditMode,
} from "../../actions/blog";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
import { toggleAddNewBlog } from "../../actions/modal";
import Modal from "../../components/Modal";
import { useState } from "react";

type BlogType = {
	title: string;
	details: string;
	photo?: string;
	type: string;
};

const BlogsList = () => {
	const dispatch = useDispatch();

	const filters = useSelector(selectFilter);
	const blogs: Array<BlogType> = useSelector(selectBlogs);
	const selectedBlog = useSelector(selectSelectedBlog);
	const editMode = useSelector(selectBlogEditMode);

	const [changeInSelectedBlog, setChangeInSelectedBlog] =
		useState(selectedBlog);

	const [showModal, setShowModal] = useState(false);

	const filteredBlogs = blogs.filter((blog) => {
		return (
			blog.title.includes(filters.query) &&
			filters.types.includes(blog.type)
		);
	});

	const discardChanges = () => {
		dispatch(toggleEditMode());
		dispatch(setSelectedBlog(changeInSelectedBlog));
		setShowModal(false);
	};

	const continueEditing = () => {
		setChangeInSelectedBlog(selectedBlog);
		setShowModal(false);
	};

	const blogElements = filteredBlogs.map((data, index) => {
		const clickHandler = () => {
			if (editMode) {
				setChangeInSelectedBlog(index);
				return setShowModal(true);
			}
			dispatch(setSelectedBlog(index));
		};
		return (
			<BlogSummary
				clickHandler={clickHandler}
				selected={index === selectedBlog}
				key={index}
				{...data}
			/>
		);
	});

	const newBlogClickHandler = () => {
		dispatch(toggleAddNewBlog());
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<SearchBar
					className={styles.search}
					placeholder={HOME_CONSTANTS.SEARCH_PLACEHOLDER}
				/>
				<Button clickHandler={newBlogClickHandler}>
					{HOME_CONSTANTS.NEW}
				</Button>
			</div>
			<div className={styles.blogs}>{blogElements}</div>
			{showModal && (
				<Modal closeModalHandler={() => setShowModal(false)}>
					<div className={styles.modalHeader}>
						<h6>{HOME_CONSTANTS.MODAL_TITLE_CONFIRM}</h6>
					</div>
					<div className={styles.modalBody}>
						<h5>{HOME_CONSTANTS.MODAL_CONFIRM_MESSAGE}</h5>
						<div className={styles.buttons}>
							<Button
								clickHandler={discardChanges}
								type="primary"
							>
								{HOME_CONSTANTS.MODAL_CONFIRM_YES}
							</Button>
							<Button
								clickHandler={continueEditing}
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

export default BlogsList;
