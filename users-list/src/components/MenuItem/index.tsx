import "./style.css";

type MenuProp = {
	children: string;
	selected?: boolean;
	onSelect: () => void;
};

function MenuItem(props: MenuProp) {
	const { children, selected = false, onSelect } = props;
	return (
		<span
			onClick={onSelect}
			className={`menu-item ${selected ? "selected-item" : ""}`}
		>
			{children}
		</span>
	);
}

export default MenuItem;
