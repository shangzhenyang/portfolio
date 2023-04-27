interface ListItem {
	title: string;
	link: string;
	description?: string;
	extra?: JSX.Element;
	when: boolean;
}

export default ListItem;
