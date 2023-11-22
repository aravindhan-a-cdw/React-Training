import BlogSummary from "../../components/BlogSummary";
import SearchBar from "../../components/SearchBar";
import styles from "./styles.module.scss";
import Button from "../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import {
	addNewBlogType,
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
import { useCallback, useEffect, useState } from "react";

/*
	@author Aravindhan A
	@description This component renders the list of blogs
*/

type BlogType = {
	id: string;
	title: string;
	details: string;
	photo?: string;
	type: string;
};

const BlogsList = () => {
	// hook and states initialization
	const dispatch = useDispatch();
	const [changeInSelectedBlog, setChangeInSelectedBlog] = useState<
		null | string
	>(null); // state to remember the selection of user before getting confirmation on edit
	const [showModal, setShowModal] = useState(false);

	// get states from stores
	const filters = useSelector(selectFilter);
	const availableFilters = useSelector(selectAvailableTypes);
	const blogs: Array<BlogType> = useSelector(selectBlogs);
	const selectedBlog = useSelector(selectSelectedBlog);
	const editMode = useSelector(selectBlogEditMode);

	// useEffect calls
	useEffect(() => {
		blogs.forEach((blog) => {
			if (!availableFilters.includes(blog.type)) {
				dispatch(addNewBlogType(blog.type));
				dispatch(toggleFilter(blog.type));
			}
		});
	}, [blogs, availableFilters, dispatch]);

	const discardChanges = () => {
		// handler to discard user changes
		dispatch(toggleEditMode());
		dispatch(setSelectedBlog(changeInSelectedBlog));
		setShowModal(false);
	};

	const continueEditing = () => {
		// handler to prevent change of blog as user wants to continue editing
		setChangeInSelectedBlog(selectedBlog);
		setShowModal(false);
	};

	const newBlogClickHandler = useCallback(() => {
		// handler to open SideModal to get input from user to create a new blog
		dispatch(toggleAddNewBlog());
	}, [dispatch]);

	const filteredBlogs = blogs.filter((blog) => {
		// filter blogs based on user search query
		return (
			blog.title.toLowerCase().includes(filters.query.toLowerCase()) &&
			filters.types.includes(blog.type)
		);
	});

	const clickHandler = useCallback(
		(blogId: string) => {
			// handler to change to the blog if user clicks on it
			if (editMode) {
				// if user is in edit mode then get confirmation before changing;
				setChangeInSelectedBlog(blogId);
				setShowModal(true);
				return;
			}
			dispatch(setSelectedBlog(blogId));
		},
		[editMode, dispatch]
	);

	const blogElements = filteredBlogs.map((data, index) => {
		// this renders the blog summary elements

		return (
			<BlogSummary
				clickHandler={clickHandler}
				selected={data.id === selectedBlog}
				key={index}
				{...data}
			/>
		);
	});

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
