import { Fragment, useEffect, useState } from "react";
import classnames from "classnames";

import { isChinaSite, t } from "@/i18n";
import DownloadBar from "@/components/DownloadBar";
import Footer from "@/components/Footer";
import ListGroup from "@/components/ListGroup";

import styles from "@/styles/LinkList.module.css";
import aiChatIcon from "@/images/ai-chat.png";
import devmatchIcon from "@/images/devmatch.png";
import uwClassmateIcon from "@/images/uw-classmate.png";
import uwIcon from "@/images/uw.jpg";

import type { ListItem } from "@/types";

interface Group {
	title: string;
	items: ListItem[];
	when: boolean;
}

function LinkList(): JSX.Element {
	const [isTencent, setIsTencent] = useState<boolean>(false);

	const groups: Group[] = [
		{
			title: t("mainProjects"),
			items: [
				{
					title: t("airportal"),
					link: "https://airportal.cn/",
					icon: "https://assets.retiehe.com/ap-apple-touch-icon-2.png",
					description: t("airportalDescription"),
					extra: isChinaSite ? undefined : (
						<DownloadBar
							appName="AirPortal"
							appStoreLink="https://apps.apple.com/app/id1524074327"
							googlePlayLink="https://play.google.com/store/apps/details?id=cn.airportal&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
						/>
					),
					tags: [
						"JavaScript",
						"Electron",
						"Swift (iOS)",
						"PHP",
						"SQL",
						"Cybersecurity",
						"Memcached",
						"PWA",
						"S3",
						"WebSocket",
						"RSA Encryption"
					],
					when: true
				},
				{
					title: t("limeStartPage"),
					link: "https://intro.limestart.cn/",
					icon: "https://assets.retiehe.com/lime-apple-touch-icon.png",
					description: t("limeStartPageDescription"),
					tags: [
						"JavaScript",
						"Vue",
						"Node.js",
						"NoSQL",
						"PWA",
						"Chrome Extension",
						"Load Balancing"
					],
					when: true
				},
				{
					title: t("webHosting"),
					link: "https://host.retiehe.com/",
					icon: "https://assets.retiehe.com/host-icon-512.png",
					description: t("webHostingDescription"),
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
						"Cypress"
					],
					when: true
				}
			],
			when: true
		},
		{
			title: t("openSourcedProjects"),
			items: [
				{
					title: t("encoder"),
					link: "https://encoder.shangzhenyang.com/",
					description: t("encoderDescription"),
					tags: [
						"TypeScript",
						"React",
						"PWA"
					],
					when: true
				},
				{
					title: t("randomNumber"),
					link: "https://random.shangzhenyang.com/",
					description: t("randomNumberDescription"),
					tags: [
						"TypeScript",
						"Vue",
						"PWA"
					],
					when: true
				},
				{
					title: t("calculator"),
					link: "https://calc.shangzhenyang.com/",
					description: t("calculatorDescription"),
					tags: [
						"TypeScript",
						"React",
						"PWA"
					],
					when: true
				},
				{
					title: t("periodicTable"),
					link: "https://github.com/shangzhenyang/periodic-table",
					description: t("periodicTableDescription"),
					tags: [
						"TypeScript",
						"NPM Package"
					],
					when: true
				},
				{
					title: t("bingWallpaperApi"),
					link: "https://github.com/shangzhenyang/bing-wallpaper",
					description: t("bingWallpaperApiDescription"),
					tags: [
						"TypeScript",
						"Serverless"
					],
					when: true
				}
			],
			when: true
		},
		{
			title: "Collaborative Projects",
			items: [
				{
					title: "DevMatch",
					link: "https://app.devmatch.io/",
					icon: devmatchIcon.src,
					description: "A coding assessment platform for hiring software engineers.",
					tags: [
						"TypeScript",
						"Angular",
						"Node.js",
						"AWS Lambda",
						"SQL",
						"Cypress",
						"DevOps"
					],
					when: true
				},
				{
					title: "Hua Classmate",
					link: "https://uwclassmate.com/",
					icon: uwClassmateIcon.src,
					description: "A course commenting website for students at University of Washington.",
					tags: [
						"JavaScript",
						"React",
						"Node.js",
						"SQL"
					],
					when: true
				}
			],
			when: !isChinaSite
		},
		{
			title: t("toolbox"),
			items: [
				{
					title: t("wordList"),
					link: "https://tool.retiehe.com/wordlist",
					tags: [],
					when: true
				},
				{
					title: t("timer"),
					link: "https://tool.retiehe.com/timer",
					tags: [],
					when: true
				},
				{
					title: t("marquee"),
					link: "https://tool.retiehe.com/marquee",
					tags: [],
					when: true
				},
				{
					title: t("textEditor"),
					link: "https://tool.retiehe.com/texteditor",
					tags: [],
					when: true
				}
			],
			when: true
		},
		{
			title: t("otherProjects"),
			items: [
				{
					title: t("unofficialChatgptClient"),
					link: "https://www.ai-chat.dev/",
					icon: aiChatIcon.src,
					tags: [
						"TypeScript",
						"React"
					],
					when: !isTencent
				},
				{
					title: t("uwCampusPaths"),
					link: "https://paths.shangzhenyang.com/",
					icon: uwIcon.src,
					tags: [
						"TypeScript",
						"React",
						"Dijkstra's"
					],
					when: true
				}
			],
			when: true
		}
	];

	const groupElements = groups.map((group) => {
		if (!group.when) {
			return <Fragment key={group.title}></Fragment>;
		}
		return (
			<ListGroup
				className={classnames(styles["list-item"], styles["in-group"])}
				key={group.title}
				items={group.items}
				title={group.title}
			/>
		);
	});

	const friends = [
		{
			title: "毛若昕",
			link: "https://maorx.cn/",
		},
		{
			title: "空白的羽翼",
			link: "https://blankwings.com/"
		},
		{
			title: "Idealclover",
			link: "https://idealclover.top/"
		}
	];

	const friendElements = friends.map(({ link, title }) => {
		return (
			<a
				className={styles["list-item"]}
				href={link}
				key={title}
				rel="noopener"
			>{title}</a>
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
				>{t("myWorks")}</a>
				{groupElements}
			</div>
			{isChinaSite && <div id="friends">
				<a
					className={styles["title"]}
					href="#friends"
					target="_self"
				>友情链接</a>
				{friendElements}
			</div>}
			<Footer />
		</div>
	);
}

export default LinkList;
