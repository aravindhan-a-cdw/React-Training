import styles from "./styles.module.scss";

type BannerProps = {
	children: any;
	image: string;
};

function Banner(props: BannerProps) {
	const { children, image } = props;
	return (
		<div className={styles.banner}>
			{children}
			<div className={styles.image}>
				<img src={image} alt="A banner" />
			</div>
		</div>
	);
}

export default Banner;
