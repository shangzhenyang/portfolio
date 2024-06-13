import { isChinaSite } from "@/i18n";
import { ListItemInfo } from "@/types";
import classNames from "classnames";
import ExportedImage from "next-image-export-optimizer";

interface ListItemProps {
	className: string;
	item: ListItemInfo;
}

function ListItem({ className, item }: ListItemProps): JSX.Element {
	const descriptionStyles = "text-sm text-white/50";
	const iconStyles = "border shadow rounded-lg border-solid border-white/20";

	if (!item.when) {
		return <></>;
	}
	const tagElements = item.tags.map((tag) => {
		return (
			<span
				key={tag}
				className="bg-dark-blue/50 border inline-block whitespace-nowrap m-px px-2.5 py-1 rounded border-solid border-white/10"
			>
				{tag}
			</span>
		);
	});
	return (
		<div>
			<a
				className={className}
				href={item.link}
				rel="noopener"
			>
				{item.icon ? (
					<ExportedImage
						className={iconStyles}
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
						className={classNames(
							iconStyles,
							"items-center bg-icon-gradient text-white/80 flex text-lg justify-center h-9 w-9",
						)}
						role="img"
					>
						{item.title[0]}
					</div>
				)}
				<div>
					{item.title}
					{item.description && (
						<div className={descriptionStyles}>
							{item.description}
						</div>
					)}
				</div>
			</a>
			{item.extra}
			{!isChinaSite && item.tags.length > 0 && (
				<div
					className={classNames(descriptionStyles, "pt-1 pb-4 px-4")}
				>
					{tagElements}
				</div>
			)}
		</div>
	);
}

export default ListItem;
