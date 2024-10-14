import DownloadBar from "@/components/DownloadBar";
import Footer from "@/components/Footer";
import ListGroup from "@/components/ListGroup";
import ListItem from "@/components/ListItem";
import { isChinese, t } from "@/i18n";
import aiChatIcon from "@/images/ai-chat.png";
import devmatchIcon from "@/images/devmatch.png";
import uwClassmateIcon from "@/images/uw-classmate.png";
import uwIcon from "@/images/uw.jpg";
import { ListItemInfo } from "@/types";
import { Fragment } from "react";

interface Group {
	title: string;
	items: ListItemInfo[];
	when: boolean;
}

function LinkList(): JSX.Element {
	const groups: Group[] = [
		{
			items: [
				{
					description: t("airportalDescription"),
					extra: isChinese ? undefined : (
						<DownloadBar
							appName="AirPortal"
							appStoreLink="https://apps.apple.com/app/id1524074327"
							googlePlayLink="https://play.google.com/store/apps/details?id=cn.airportal&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
						/>
					),
					icon: "https://assets.retiehe.com/ap-apple-touch-icon-2.png",
					link: "https://www.airportal.cn/",
					tags: [
						"TypeScript",
						"React",
						"Electron",
						"Swift",
						"SwiftUI",
						"Kotlin",
						"Jetpack Compose",
						"Node.js",
						"PHP",
						"SQL",
						"Memcached",
						"PWA",
						"S3",
						"WebSocket",
						"RSA Encryption",
						"Cypress",
						"Vite",
					],
					title: t("airportal"),
					when: true,
				},
				{
					description: t("limeStartPageDescription"),
					icon: "https://assets.retiehe.com/lime-apple-touch-icon.png",
					link: isChinese
						? "https://intro.limestart.cn/"
						: "https://intro.limestart.page/en/",
					tags: [
						"JavaScript",
						"Vue",
						"Node.js",
						"NoSQL",
						"PWA",
						"Chrome Extension",
					],
					title: t("limeStartPage"),
					when: true,
				},
				{
					description: t("webHostingDescription"),
					icon: "https://assets.retiehe.com/host-icon-512-2.png",
					link: "https://host.retiehe.com/",
					tags: [
						"TypeScript",
						"Vue",
						"PHP",
						"SQL",
						"Serverless",
						"S3",
						"WAF",
						"Cypress",
						"Vite",
					],
					title: t("webHosting"),
					when: true,
				},
			],
			title: t("mainFullStackProjects"),
			when: true,
		},
		{
			items: [
				{
					description: t("encoderDescription"),
					link: "https://encoder.shangzhenyang.com/",
					tags: [
						"TypeScript",
						"React",
						"Tailwind CSS",
						"NextUI",
						"PWA",
						"Vite",
					],
					title: t("encoder"),
					when: true,
				},
				{
					description: t("randomNumberDescription"),
					link: "https://random.shangzhenyang.com/",
					tags: ["TypeScript", "Vue", "PWA", "Vite"],
					title: t("randomNumber"),
					when: true,
				},
				{
					description: t("calculatorDescription"),
					link: "https://calc.shangzhenyang.com/",
					tags: ["TypeScript", "React", "PWA", "Vite"],
					title: t("calculator"),
					when: true,
				},
				{
					description: t("marqueeDescription"),
					link: "https://marquee.shangzhenyang.com/",
					tags: [
						"TypeScript",
						"React",
						"Tailwind CSS",
						"NextUI",
						"PWA",
						"Vite",
					],
					title: t("marquee"),
					when: true,
				},
				{
					description: t("uwCampusPathsDescription"),
					icon: uwIcon.src,
					link: "https://paths.shangzhenyang.com/",
					tags: ["TypeScript", "React", "Dijkstra's"],
					title: t("uwCampusPaths"),
					when: true,
				},
			],
			title: t("frontEndOnlyProjects"),
			when: true,
		},
		{
			items: [
				{
					description: t("devmatchDescription"),
					icon: devmatchIcon.src,
					link: "https://www.devmatch.io/",
					tags: [
						"TypeScript",
						"Angular",
						"Node.js",
						"AWS Lambda",
						"SQL",
						"Cypress",
					],
					title: "DevMatch",
					when: true,
				},
				{
					description: t("huaClassmateDescription"),
					icon: uwClassmateIcon.src,
					link: "https://uwclassmate.com/",
					tags: ["JavaScript", "React", "Node.js", "SQL"],
					title: t("huaClassmate"),
					when: true,
				},
			],
			title: t("participatedIn"),
			when: true,
		},
		{
			items: [
				{
					description: t("lanScanDescription"),
					link: "https://www.npmjs.com/package/lan-scan",
					tags: ["TypeScript", "Node.js"],
					title: t("lanScan"),
					when: true,
				},
				{
					description: t("dateShiftDescription"),
					link: "https://www.npmjs.com/package/date-shift",
					tags: ["TypeScript", "Jest"],
					title: t("dateShift"),
					when: true,
				},
				{
					description: t("upyunUploaderDescription"),
					link: "https://www.npmjs.com/package/@shangzhen/upyun-uploader",
					tags: ["TypeScript", "Node.js", "CI/CD", "CLI"],
					title: t("upyunUploader"),
					when: true,
				},
				{
					description: t("periodicTableDescription"),
					link: "https://www.npmjs.com/package/@shangzhen/periodic-table",
					tags: ["TypeScript"],
					title: t("periodicTable"),
					when: true,
				},
			],
			title: t("npmProjects"),
			when: true,
		},
		{
			items: [
				{
					description: t("aiChatDescription"),
					icon: aiChatIcon.src,
					link: "https://www.ai-chat.dev/",
					tags: ["TypeScript", "React", "Cloudflare Workers"],
					title: t("aiChat"),
					when: true,
				},
				{
					description: t("bingWallpaperApiDescription"),
					link: "https://github.com/shangzhenyang/bing-wallpaper",
					tags: ["TypeScript", "Serverless"],
					title: t("bingWallpaperApi"),
					when: true,
				},
			],
			title: t("otherProjects"),
			when: true,
		},
	];

	const groupElements = groups.map((group) => {
		if (!group.when) {
			return <Fragment key={group.title}></Fragment>;
		}
		return (
			<ListGroup
				className="in-group"
				key={group.title}
				items={group.items}
				title={group.title}
			/>
		);
	});

	const friends = [
		{
			icon: "https://maorx.cn/images/apple-touch-icon-maorx.png",
			link: "https://maorx.cn/",
			tags: [],
			title: "毛若昕",
			when: true,
		},
		{
			link: "https://blankwings.com/",
			tags: [],
			title: "空白的羽翼",
			when: true,
		},
		{
			icon: "https://cdn.idealclover.cn/Projects/homepage/apple-touch-icon.png",
			link: "https://idealclover.top/",
			tags: [],
			title: "Idealclover",
			when: true,
		},
	];

	const friendElements = friends.map((item) => {
		return (
			<ListItem
				item={item}
				key={item.title}
			/>
		);
	});

	return (
		<div className="link-list">
			<div
				id="works"
				className="groups"
			>
				<a
					className="title"
					href="#works"
					target="_self"
				>
					{t("myWorks")}
				</a>
				{groupElements}
			</div>
			{isChinese && (
				<div id="friends">
					<a
						className="title"
						href="#friends"
						target="_self"
					>
						友情链接
					</a>
					{friendElements}
				</div>
			)}
			<Footer />
		</div>
	);
}

export default LinkList;
