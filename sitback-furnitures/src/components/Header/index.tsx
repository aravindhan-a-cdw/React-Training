type HeaderProps = {
	children?: any;
	className?: string;
};

const Header = (props: HeaderProps) => {
	const { className } = props;
	return <div className={`btn ${className}`}>Header</div>;
};

export default Header;
