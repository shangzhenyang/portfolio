import { ListItemInfo } from "@/types";
import classNames from "classnames";
import Image from "next/image";

interface ListItemProps {
	className?: string;
	item: ListItemInfo;
}

function ListItem({ className, item }: ListItemProps): JSX.Element {
	if (!item.when) {
		return <></>;
	}
	const tagElements = item.tags.map((tag) => {
		return (
			<span
				className="tag"
				key={tag}
			>
				{tag}
			</span>
		);
	});
	return (
		<div>
			<a
				className={classNames("list-item", className)}
				href={item.link}
				rel="noopener"
			>
				{item.icon ? (
					<Image
						className="icon"
						src={item.icon}
						alt=""
						width={36}
						height={36}
						draggable={false}
						unoptimized={true}
						placeholder="empty"
					/>
				) : (
					<div
						aria-hidden={true}
						className="icon text-icon"
						role="img"
					>
						{item.title[0]}
					</div>
				)}
				<div>
					{item.title}
					{item.description && (
						<div className="description">{item.description}</div>
					)}
				</div>
			</a>
			{item.extra}
			{item.tags.length > 0 && (
				<div className="description tags">{tagElements}</div>
			)}
		</div>
	);
}

export default ListItem;
