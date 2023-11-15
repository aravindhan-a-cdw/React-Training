import styles from "./styles.module.scss";
import Button from "../Button";

type BlogProps = {
	className?: string;
};

type BlogDetails = {
	title: string;
	details: string;
	type: string;
	photo?: string;
};

const Blog = (props: BlogProps) => {
	const blogDetails: BlogDetails = {
		title: "Summer - A Long Tale",
		details:
			"Most of us have, at some point, considered what we would do if we could travel back in time. Maybe we would give ourselves some hot investment advice and become millionaires, or change history for the better, or witness our favorite historical event. If I could travel back in time and do one thing, I wouldn’t cheat on the stock market, or kill Hitler. I would simply give myself a few words of advice. What follows are some of the most important lessons I’ve learned in life- from books, from hard-fought experience, from friends, teachers and mentors much wiser than myself. Some of these lessons took me a very long time to learn- and while I wish I could have learned them faster, it would have taken me even longer if I didn’t have help. Sadly, we can’t time travel, but what we can do is learn from others, which is a hell of a lot faster than trying to figure things out for ourselves. Here are 40 little knowledge bombs that, in my opinion, took me way too long to learn.",
		photo: "https://cdn.dribbble.com/users/59947/screenshots/8954934/media/158f64a559119eb78bd8cf5b33a92b18.jpg?resize=1600x1200&vertical=center",
		type: "International",
	};

	const { className = "" } = props;

	const { photo, title, details } = blogDetails;
	return (
		<div className={`${styles.blogContainer} ${className}`}>
			<img src={photo} alt={title} />
			<h2>{title}</h2>
			<p>{details}</p>
			<Button className={styles.button} type="secondary">
				Edit Content
			</Button>
		</div>
	);
};

export default Blog;
