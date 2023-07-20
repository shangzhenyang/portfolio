import ExportedImage from "next-image-export-optimizer";

import googlePlayBadge from "@/images/google-play.png";
import styles from "@/styles/DownloadBar.module.css";

interface Props {
	appName: string;
	appStoreLink: string;
	googlePlayLink: string;
}

function DownloadBar({
	appName,
	appStoreLink,
	googlePlayLink,
}: Props): JSX.Element {
	return (
		<div className={styles["download-bar"]}>
			<a href={appStoreLink}>
				<ExportedImage
					src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
					alt={"Download " + appName + " on the App Store"}
					height={41}
					width={123}
					draggable={false}
					unoptimized={true}
					placeholder="empty"
				/>
			</a>
			<a href={googlePlayLink}>
				<ExportedImage
					src={googlePlayBadge.src}
					alt={"Get " + appName + " on Google Play"}
					height={60}
					width={155}
					draggable={false}
					placeholder="empty"
				/>
			</a>
		</div>
	);
}

export default DownloadBar;
