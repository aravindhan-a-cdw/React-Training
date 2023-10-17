type HeaderProps = {
	children?: any;
	className?: string;
};

const Footer = (props: HeaderProps) => {
	const { className } = props;
	return <div className={`btn ${className}`}>Footer</div>;
};

export default Footer;
