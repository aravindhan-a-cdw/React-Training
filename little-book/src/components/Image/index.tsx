import styles from "./styles.module.scss";
import fallbackImage from "../../assets/default-fallback-image.png";
import { useEffect, useState } from "react";

type ImageProps = {
	src: string;
	alt: string;
	fallbackSrc?: string;
	onImageLoaded?: () => void;
};

/*
	@author Aravindhan A
	@description This component renders image with a fallback image.
*/

const Image = (props: ImageProps) => {
	// props destructuring
	const { src, alt, fallbackSrc = fallbackImage, onImageLoaded } = props;

	// hooks and states initialization
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
	}, [src]);

	const imageLoadedHandler = () => {
		if (onImageLoaded) onImageLoaded();
		setIsLoading(false);
	};

	return (
		<img
			className={`${isLoading ? styles.shimmerEffect : ""}`}
			src={src}
			alt={alt}
			onLoad={imageLoadedHandler}
			onError={(event) => {
				if (event.currentTarget.src === fallbackSrc) return;
				event.currentTarget.src = fallbackSrc;
				event.currentTarget.alt = "Fallback image";
			}}
		/>
		// <>
		// 	<div className={styles.skeletonBox}>
		// 	</div>
		// </>
	);
};

export default Image;
