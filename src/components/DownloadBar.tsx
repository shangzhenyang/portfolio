import googlePlayBadge from "@/images/google-play.png";
import Image from "next/image";

interface DownloadBarProps {
	appName: string;
	appStoreLink: string;
	googlePlayLink: string;
}

function DownloadBar({
	appName,
	appStoreLink,
	googlePlayLink,
}: DownloadBarProps): JSX.Element {
	return (
		<div className="download-bar">
			<a
				aria-label={`Download ${appName} App for iOS`}
				href={appStoreLink}
				title="Apple and the Apple Logo are registered trademarks of Apple Inc."
			>
				<Image
					alt={`Download ${appName} on the App Store`}
					draggable={false}
					height={41}
					placeholder="empty"
					src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
					unoptimized={true}
					width={123}
				/>
			</a>
			<a
				aria-label={`Download ${appName} App for Android`}
				href={googlePlayLink}
				title="Google Play and the Google Play logo are trademarks of Google LLC."
			>
				<Image
					alt={`Get ${appName} on Google Play`}
					draggable={false}
					height={60}
					placeholder="empty"
					src={googlePlayBadge.src}
					unoptimized={true}
					width={155}
				/>
			</a>
		</div>
	);
}

export default DownloadBar;
