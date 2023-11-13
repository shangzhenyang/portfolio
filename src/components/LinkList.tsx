import DownloadBar from "@/components/DownloadBar";
import Footer from "@/components/Footer";
import ListGroup from "@/components/ListGroup";
import { isChinaSite, t } from "@/i18n";
import aiChatIcon from "@/images/ai-chat.png";
import devmatchIcon from "@/images/devmatch.png";
import uwClassmateIcon from "@/images/uw-classmate.png";
import uwIcon from "@/images/uw.jpg";
import styles from "@/styles/LinkList.module.css";
import { ListItem } from "@/types";
import classNames from "classnames";
import { Fragment, useEffect, useState } from "react";

interface Group {
	title: string;
	items: ListItem[];
	when: boolean;
}

function LinkList(): JSX.Element {
	const [isTencent, setIsTencent] = useState<boolean>(false);

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
						"PHP",
						"SQL",
						"Cybersecurity",
						"Memcached",
						"PWA",
						"S3",
						"WebSocket",
						"RSA Encryption",
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
					icon: "https://assets.retiehe.com/host-icon-512.png",
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
			title: t("mainProjects"),
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
					description: t("periodicTableDescription"),
					link: "https://github.com/shangzhenyang/periodic-table",
					tags: [
						"TypeScript",
						"NPM Package",
					],
					title: t("periodicTable"),
					when: true,
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
			title: t("openSourcedProjects"),
			when: true,
		},
		{
			items: [
				{
					description: "A coding assessment platform for hiring software engineers.",
					icon: devmatchIcon.src,
					link: "https://app.devmatch.io/",
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
					link: "https://tool.retiehe.com/marquee",
					tags: [],
					title: t("marquee"),
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
					icon: aiChatIcon.src,
					link: "https://www.ai-chat.dev/",
					tags: [
						"TypeScript",
						"React",
					],
					title: "Unofficial ChatGPT Client",
					when: !isChinaSite && !isTencent,
				},
				{
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
				className={classNames(styles["list-item"], styles["in-group"])}
				key={group.title}
				items={group.items}
				title={group.title}
			/>
		);
	});

	const friends = [
		{
			link: "https://maorx.cn/",
			title: "毛若昕",
		},
		{
			link: "https://blankwings.com/",
			title: "空白的羽翼",
		},
		{
			link: "https://idealclover.top/",
			title: "Idealclover",
		},
	];

	const friendElements = friends.map(({ link, title }) => {
		return (
			<a
				className={styles["list-item"]}
				href={link}
				key={title}
				rel="noopener"
			>
				{title}
			</a>
		);
	});

	useEffect(() => {
		setIsTencent(navigator.userAgent.includes("MicroMessenger") ||
			navigator.userAgent.includes("QQ") ||
			navigator.userAgent.includes("SE 2.X MetaSr 1.0"));
	}, []);

	return (
		<div className={styles["link-list"]}>
			<div id="works" className={styles["groups"]}>
				<a
					className={styles["title"]}
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
						className={styles["title"]}
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
