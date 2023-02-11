import Image from "next/image";

import googlePlayBadge from "@/images/google-play.png";
import styles from "@/styles/DownloadBar.module.css";

interface Props {
	appName: string;
	appStoreLink: string;
	googlePlayLink: string;
}

function DownloadBar({ appName, appStoreLink, googlePlayLink }: Props) {
	return (
		<div className={styles["download-bar"]}>
			<a href={appStoreLink}>
				<Image
					src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
					alt={"Download " + appName + " on the App Store"}
					height={41}
					width={123}
				/>
			</a>
			<a href={googlePlayLink}>
				<Image
					src={googlePlayBadge.src}
					alt={"Get " + appName + " on Google Play"}
					height={60}
					width={155}
				/>
			</a>
		</div>
	);
}

export default DownloadBar;
