import { Fragment } from "react";

import styles from "@/styles/ListGroup.module.css";

import type ListItem from "@/types/ListItem";

interface Props {
	className: string;
	items: ListItem[];
	title: string;
}

function ListGroup({ className, items, title }: Props) {
	const itemElements = items.map(({ title, link, description, extra, when }) => {
		if (!when) {
			return null;
		}
		return (
			<Fragment key={title}>
				<a
					className={className}
					href={link}
					rel="noopener"
				>
					{title}
					{description && <div
						className={styles["description"]}>
						{description}
					</div>}
				</a>
				{extra}
			</Fragment >
		);
	});

	return (
		<fieldset className={styles["group"]}>
			<legend className={styles["title"]}>{title}</legend>
			{itemElements}
		</fieldset>
	);
}

export default ListGroup;
