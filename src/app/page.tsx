import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import bgImg from "@/images/reichenbach-falls.jpg";
import styles from "@/styles/Home.module.css";
import classNames from "classnames";
import ExportedImage from "next-image-export-optimizer";

function Page(): JSX.Element {
	return (
		<>
			<ExportedImage
				className={classNames(styles["bg"], styles["bg-img"])}
				src={bgImg}
				alt=""
				height={1080}
				width={1920}
				placeholder="empty"
				priority={true}
			/>
			<div className={classNames(styles["bg"], styles["bg-cover"])}></div>
			<div className={styles["root"]}>
				<Profile />
				<LinkList />
			</div>
		</>
	);
}

export default Page;
