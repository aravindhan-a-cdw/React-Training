import styles from "./styles.module.scss";

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

export default Banner;
