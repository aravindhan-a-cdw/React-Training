import fallbackImage from "../../assets/default-fallback-image.png";

type ImageProps = {
	src: string;
	alt: string;
	fallbackSrc?: string;
};

/*
	@author Aravindhan A
	@description This component renders image with a fallback image.
*/

const Image = (props: ImageProps) => {
	const { src, alt, fallbackSrc = fallbackImage } = props;

	return (
		<img
			src={src}
			alt={alt}
			onError={(event) => {
				if (event.currentTarget.src === fallbackSrc) return;
				event.currentTarget.src = fallbackSrc;
				event.currentTarget.alt = "Fallback image";
			}}
		/>
	);
};

export default Image;
