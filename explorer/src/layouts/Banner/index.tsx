import styles from "./styles.module.scss";
import PropTypes from "prop-types";

/*
	@author Aravindhan A
	@description Banner Layout Component - This renders the Banner part which is in the home page and in details page
*/

type BannerProps = {
	children: any;
	image: string;
	className?: string;
};

function Banner(props: BannerProps) {
	const { children, image, className } = props;
	return (
		<div className={`${styles.banner} ${className}`}>
			{children}
			<div className={styles.image}>
				<img src={image} alt="A banner" />
			</div>
		</div>
	);
}

Banner.propTypes = {
	children: PropTypes.element.isRequired,
	image: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default Banner;
