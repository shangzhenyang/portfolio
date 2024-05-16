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
		<fieldset className="border-solid border-y-white/10 border-b border-t p-2">
			<legend className="border text-white leading-tight mx-auto my-0 px-4 py-1 rounded border-solid border-white/10">
				{title}
			</legend>
			{itemElements}
		</fieldset>
	);
}

export default ListGroup;
