import React from "react";
import fallbackImage from "../../assets/fallbackImage.png";

type ImageProps = {
	src: string;
	alt: string;
	fallbackSrc?: string;
	className?: string;
	ref?: React.RefObject<HTMLImageElement>;
	onClick?:
		| (() => void)
		| ((event: React.MouseEvent<HTMLImageElement>) => void);
};

const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
	const {
		src,
		alt,
		onClick,
		className = "",
		fallbackSrc = fallbackImage,
	} = props;
	return (
		<img
			src={src}
			alt={alt}
			className={className}
			ref={ref}
			onClick={onClick}
			onError={(event) => {
				event.currentTarget.src = fallbackSrc;
				event.currentTarget.alt = "This is a fallback image";
			}}
		/>
	);
});

export default Image;
