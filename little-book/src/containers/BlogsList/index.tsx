import BlogSummary from "../../components/BlogSummary";
import SearchBar from "../../components/SearchBar";
import styles from "./styles.module.scss";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
	addNewFilter,
	selectAvailableTypes,
	selectFilter,
	toggleFilter,
} from "../../actions/filter";
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
import { useEffect, useState } from "react";

type BlogType = {
	id: string;
	title: string;
	details: string;
	photo?: string;
	type: string;
};

const BlogsList = () => {
	const dispatch = useDispatch();

	const filters = useSelector(selectFilter);
	const availableFilters = useSelector(selectAvailableTypes);
	const blogs: Array<BlogType> = useSelector(selectBlogs);
	const selectedBlog = useSelector(selectSelectedBlog);
	const editMode = useSelector(selectBlogEditMode);

	const [changeInSelectedBlog, setChangeInSelectedBlog] =
		useState(selectedBlog);

	const [showModal, setShowModal] = useState(false);

	const filteredBlogs = blogs.filter((blog) => {
		return (
			blog.title.toLowerCase().includes(filters.query.toLowerCase()) &&
			filters.types.includes(blog.type)
		);
	});

	useEffect(() => {
		blogs.forEach((blog) => {
			if (!availableFilters.includes(blog.type)) {
				dispatch(addNewFilter(blog.type));
				dispatch(toggleFilter(blog.type));
			}
		});
	}, [blogs, availableFilters, dispatch]);

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
			if (data.id === selectedBlog) return;
			if (editMode) {
				setChangeInSelectedBlog(data.id);
				return setShowModal(true);
			}
			dispatch(setSelectedBlog(data.id));
		};
		return (
			<BlogSummary
				clickHandler={clickHandler}
				selected={data.id === selectedBlog}
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
