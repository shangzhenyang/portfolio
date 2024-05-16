import DownloadBar from "@/components/DownloadBar";
import Footer from "@/components/Footer";
import ListGroup from "@/components/ListGroup";
import ListItem from "@/components/ListItem";
import { isChinaSite, t } from "@/i18n";
import aiChatIcon from "@/images/ai-chat.png";
import devmatchIcon from "@/images/devmatch.png";
import uwClassmateIcon from "@/images/uw-classmate.png";
import uwIcon from "@/images/uw.jpg";
import { ListItemInfo } from "@/types";
import classNames from "classnames";
import { Fragment } from "react";

interface Group {
	title: string;
	items: ListItemInfo[];
	when: boolean;
}

function LinkList(): JSX.Element {
	const listItemStyles = "items-center cursor-default flex gap-4 leading-normal transition-colors duration-200 focus:bg-white/10 hover:bg-white/10 active:bg-white/5";
	const titleStyles = "bg-black/20 border cursor-default block leading-6 transition-colors duration-200 px-6 py-2.5 border-dotted border-transparent outline-none focus:border-white/20";

	const groups: Group[] = [
		{
			items: [
				{
					description: t("airportalDescription"),
					extra: isChinaSite ? undefined : (
						<DownloadBar
							appName="AirPortal"
							appStoreLink="https://apps.apple.com/app/id1524074327"
							googlePlayLink="https://play.google.com/store/apps/details?id=cn.airportal&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
						/>
					),
					icon: "https://assets.retiehe.com/ap-apple-touch-icon-2.png",
					link: "https://airportal.cn/",
					tags: [
						"TypeScript",
						"React",
						"Electron",
						"Swift (iOS)",
						"Kotlin (Android)",
						"Jetpack Compose",
						"PHP",
						"SQL",
						"Cybersecurity",
						"Memcached",
						"PWA",
						"S3",
						"WebSocket",
						"RSA Encryption",
						"Cypress",
					],
					title: t("airportal"),
					when: true,
				},
				{
					description: t("limeStartPageDescription"),
					icon: "https://assets.retiehe.com/lime-apple-touch-icon.png",
					link: "https://intro.limestart.cn/",
					tags: [
						"JavaScript",
						"Vue",
						"Node.js",
						"NoSQL",
						"PWA",
						"Chrome Extension",
						"Load Balancing",
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
						"CDN",
						"Serverless",
						"S3",
						"WAF",
						"High Availability",
						"HTML Parsing",
						"HTTP Handling",
						"Cypress",
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
					description: "A coding assessment platform for hiring software engineers.",
					icon: devmatchIcon.src,
					link: "https://www.devmatch.io/",
					tags: [
						"TypeScript",
						"Angular",
						"Node.js",
						"AWS Lambda",
						"SQL",
						"Cypress",
						"DevOps",
					],
					title: "DevMatch",
					when: true,
				},
				{
					description: "A course commenting website for students at University of Washington.",
					icon: uwClassmateIcon.src,
					link: "https://uwclassmate.com/",
					tags: [
						"JavaScript",
						"React",
						"Node.js",
						"SQL",
					],
					title: "Hua Classmate",
					when: true,
				},
			],
			title: "Collaborative Projects",
			when: !isChinaSite,
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
						"PWA",
					],
					title: t("encoder"),
					when: true,
				},
				{
					description: t("randomNumberDescription"),
					link: "https://random.shangzhenyang.com/",
					tags: [
						"TypeScript",
						"Vue",
						"PWA",
					],
					title: t("randomNumber"),
					when: true,
				},
				{
					description: t("calculatorDescription"),
					link: "https://calc.shangzhenyang.com/",
					tags: [
						"TypeScript",
						"React",
						"PWA",
					],
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
						"PWA",
					],
					title: t("marquee"),
					when: true,
				},
				{
					description: t("uwCampusPathsDescription"),
					icon: uwIcon.src,
					link: "https://paths.shangzhenyang.com/",
					tags: [
						"TypeScript",
						"React",
						"Dijkstra's",
					],
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
					description: t("lanScanDescription"),
					link: "https://www.npmjs.com/package/lan-scan",
					tags: [
						"TypeScript",
						"Node.js",
					],
					title: t("lanScan"),
					when: true,
				},
				{
					description: t("dateShiftDescription"),
					link: "https://www.npmjs.com/package/date-shift",
					tags: [
						"TypeScript",
						"Jest",
					],
					title: t("dateShift"),
					when: true,
				},
				{
					description: t("upyunUploaderDescription"),
					link: "https://www.npmjs.com/package/@shangzhen/upyun-uploader",
					tags: [
						"TypeScript",
						"Node.js",
						"CI/CD",
						"CLI",
					],
					title: t("upyunUploader"),
					when: true,
				},
				{
					description: t("periodicTableDescription"),
					link: "https://www.npmjs.com/package/@shangzhen/periodic-table",
					tags: [
						"TypeScript",
					],
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
					link: "https://tool.retiehe.com/wordlist",
					tags: [],
					title: t("wordList"),
					when: true,
				},
				{
					link: "https://tool.retiehe.com/timer",
					tags: [],
					title: t("timer"),
					when: true,
				},
				{
					link: "https://tool.retiehe.com/texteditor",
					tags: [],
					title: t("textEditor"),
					when: true,
				},
			],
			title: t("toolbox"),
			when: true,
		},
		{
			items: [
				{
					description: "An unofficial ChatGPT client.",
					icon: aiChatIcon.src,
					link: "https://www.ai-chat.dev/",
					tags: [
						"TypeScript",
						"React",
						"Cloudflare Workers",
					],
					title: "AI Chat",
					when: !isChinaSite,
				},
				{
					description: t("bingWallpaperApiDescription"),
					link: "https://github.com/shangzhenyang/bing-wallpaper",
					tags: [
						"TypeScript",
						"Serverless",
					],
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
				className={classNames(listItemStyles, "bg-transparent px-5 py-2.5 rounded")}
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
				className={classNames(listItemStyles, "bg-black/10 px-7 py-2.5")}
				item={item}
				key={item.title}
			/>
		);
	});

	return (
		<div className={"flex flex-col grow-0 shrink-0 basis-[400px] gap-5 h-screen md:overflow-x-hidden md:overflow-y-auto"}>
			<div id="works" className="flex flex-col gap-5 md:w-[400px]">
				<a
					className={titleStyles}
					href="#works"
					target="_self"
				>
					{t("myWorks")}
				</a>
				{groupElements}
			</div>
			{isChinaSite &&
				<div id="friends">
					<a
						className={titleStyles}
						href="#friends"
						target="_self"
					>
						友情链接
					</a>
					{friendElements}
				</div>
			}
			<Footer />
		</div>
	);
}

export default LinkList;
