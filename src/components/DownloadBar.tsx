import googlePlayBadge from "@/images/google-play.png";
import ExportedImage from "next-image-export-optimizer";

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
	const linkStyles =
		"outline-none transition-transform focus:scale-105 hover:scale-105 active:scale-100";

	return (
		<div className="flex items-center px-5">
			<a
				aria-label={`Download ${appName} App for iOS`}
				className={linkStyles}
				href={appStoreLink}
				title="Apple and the Apple Logo are registered trademarks of Apple Inc."
			>
				<ExportedImage
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
				className={linkStyles}
				href={googlePlayLink}
				title="Google Play and the Google Play logo are trademarks of Google LLC."
			>
				<ExportedImage
					alt={`Get ${appName} on Google Play`}
					draggable={false}
					height={60}
					placeholder="empty"
					src={googlePlayBadge.src}
					width={155}
				/>
			</a>
		</div>
	);
}

export default DownloadBar;
