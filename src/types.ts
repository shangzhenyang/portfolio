export interface ListItem {
	description?: string;
	extra?: JSX.Element;
	icon?: string;
	link: string;
	tags: string[];
	title: string;
	when: boolean;
}
