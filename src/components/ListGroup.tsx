import ListItem from "@/components/ListItem";
import { ListItemInfo } from "@/types";

interface ListGroupProps {
	className: string;
	items: ListItemInfo[];
	title: string;
}

function ListGroup({ className, items, title }: ListGroupProps): JSX.Element {
	const itemElements = items.map((item) => {
		return (
			<ListItem
				className={className}
				item={item}
				key={item.title}
			/>
		);
	});

	return (
		<fieldset>
			<legend>{title}</legend>
			{itemElements}
		</fieldset>
	);
}

export default ListGroup;
