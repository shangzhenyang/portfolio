import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import Image from "next/image";

function Page(): JSX.Element {
	return (
		<>
			<Image
				alt=""
				className="wallpaper wallpaper-image"
				height={1080}
				placeholder="empty"
				priority={true}
				src="https://www.bing.com/th?id=OHR.ReichenbachFalls_EN-US9352987746_1920x1080.jpg"
				unoptimized={true}
				width={1920}
			/>
			<div className="wallpaper wallpaper-cover"></div>
			<div className="root">
				<Profile />
				<LinkList />
			</div>
		</>
	);
}

export default Page;
