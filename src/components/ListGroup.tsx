import classnames from "classnames";

import { isChinaSite } from "@/i18n";

import styles from "@/styles/ListGroup.module.css";

import type ListItem from "@/types/ListItem";

interface Props {
	className: string;
	items: ListItem[];
	title: string;
}

function ListGroup({ className, items, title }: Props): JSX.Element {
	const itemElements = items.map(({
		title,
		link,
		description,
		extra,
		tags,
		when
	}) => {
		if (!when) {
			return null;
		}
		const tagElements = tags.map((tag) => {
			return (
				<span key={tag}>{tag}</span>
			);
		});
		return (
			<div key={title}>
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
				{!isChinaSite && tags.length > 0 && <div
					className={classnames(
						styles["description"],
						styles["tags"]
					)}
				>{tagElements}</div>}
			</div>
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
