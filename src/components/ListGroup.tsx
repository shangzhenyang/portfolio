import { Fragment } from "react";

import styles from "@/styles/ListGroup.module.css";

import type ListItem from "@/types/ListItem";

interface Props {
	items: ListItem[];
	title: string;
}

function ListGroup({ items, title }: Props) {
	const itemsElem = items.map(({ title, link, description, extra }) => {
		return (
			<Fragment key={title}>
				<a
					className={styles["list-item"]}
					href={link}>
					{title}
					{description && <div
						className={styles["description"]}>
						{description}
					</div>}
				</a>
				{extra}
			</Fragment>
		);
	});

	return (
		<fieldset className={styles["group"]}>
			<legend className={styles["title"]}>{title}</legend>
			{itemsElem}
		</fieldset>
	);
}

export default ListGroup;
