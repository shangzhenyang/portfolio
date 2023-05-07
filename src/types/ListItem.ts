interface ListItem {
	title: string;
	link: string;
	description?: string;
	extra?: JSX.Element;
	tags: string[];
	when: boolean;
}

export default ListItem;
