import { Fragment } from "react";
import classnames from "classnames";
import ExportedImage from "next-image-export-optimizer";

import { isChinaSite } from "@/i18n";

import styles from "@/styles/ListGroup.module.css";

import type { ListItem } from "@/types";

interface Props {
	className: string;
	items: ListItem[];
	title: string;
}

function ListGroup({ className, items, title }: Props): JSX.Element {
	const itemElements = items.map((item) => {
		if (!item.when) {
			return <Fragment key={item.title}></Fragment>;
		}
		const tagElements = item.tags.map((tag) => {
			return (
				<span key={tag}>{tag}</span>
			);
		});
		return (
			<div key={item.title}>
				<a
					className={className}
					href={item.link}
					rel="noopener"
				>
					{item.icon &&
						<ExportedImage
							className={styles["icon"]}
							src={item.icon}
							alt=""
							width={35}
							height={35}
							draggable={false}
							unoptimized={true}
							placeholder="empty"
						/>
					}
					<div>
						{item.title}
						{item.description &&
							<div className={styles["description"]}>
								{item.description}
							</div>
						}
					</div>
				</a>
				{item.extra}
				{!isChinaSite && item.tags.length > 0 &&
					<div
						className={classnames(
							styles["description"],
							styles["tags"]
						)}
					>
						{tagElements}
					</div>
				}
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
