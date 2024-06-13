import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import classNames from "classnames";
import ExportedImage from "next-image-export-optimizer";

function Page(): JSX.Element {
	const backgroundStyles = "h-full fixed w-full z-[-1] left-0 top-0";

	return (
		<>
			<ExportedImage
				alt=""
				className={classNames(
					backgroundStyles,
					"block object-cover blur-md scale-110",
				)}
				height={1080}
				placeholder="empty"
				priority={true}
				src="https://www.bing.com/th?id=OHR.ReichenbachFalls_EN-US9352987746_1920x1080.jpg"
				unoptimized={true}
				width={1920}
			/>
			<div
				className={classNames(
					backgroundStyles,
					"bg-dark-blue/70 md:bg-transparent md:bg-wallpaper-gradient",
				)}
			></div>
			<div className="flex flex-col md:flex-row h-full overflow-auto transition-opacity duration-200">
				<Profile />
				<LinkList />
			</div>
		</>
	);
}

export default Page;
