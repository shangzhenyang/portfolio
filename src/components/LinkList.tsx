import classnames from "classnames";

import { isChinaSite, t } from "@/i18n";
import DownloadBar from "@/components/DownloadBar";
import Footer from "@/components/Footer";
import ListGroup from "@/components/ListGroup";

import styles from "@/styles/LinkList.module.css";

import type ListItem from "@/types/ListItem";

interface Group {
	title: string;
	items: ListItem[];
	when: boolean;
}

function LinkList() {
	const groups: Group[] = [
		{
			title: t("mainProjects"),
			items: [
				{
					title: t("airportal"),
					link: "https://airportal.cn/",
					description: t("airportalDescription"),
					extra: isChinaSite ? undefined : (
						<DownloadBar
							appName="AirPortal"
							appStoreLink="https://apps.apple.com/app/id1524074327"
							googlePlayLink="https://play.google.com/store/apps/details?id=cn.airportal&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
						/>
					),
					when: true
				},
				{
					title: t("limeStartPage"),
					link: "https://limestart.cn/intro",
					description: t("limeStartPageDescription"),
					when: true
				},
				{
					title: t("toolbox"),
					link: "https://tool.retiehe.com/",
					description: t("toolboxDescription"),
					when: true
				},
				{
					title: t("webHosting"),
					link: "https://host.retiehe.com/",
					description: t("webHostingDescription"),
					when: true
				}
			],
			when: true
		},
		{
			title: "Collaborative Project",
			items: [
				{
					title: "Hua Classmate",
					link: "https://uwclassmate.com/",
					description: "A course commenting website for UW students.",
					when: true
				}
			],
			when: !isChinaSite
		},
		{
			title: t("openSourcedProjects"),
			items: [
				{
					title: t("encoder"),
					link: "https://encoder.shangzhenyang.com/",
					description: t("encoderDescription"),
					when: true
				},
				{
					title: t("randomNumber"),
					link: "https://random.shangzhenyang.com/",
					description: t("randomNumberDescription"),
					when: true
				},
				{
					title: t("bingWallpaperApi"),
					link: "https://github.com/shangzhenyang/bing-wallpaper",
					description: t("bingWallpaperApiDescription"),
					when: true
				},
				{
					title: t("periodicTable"),
					link: "https://github.com/shangzhenyang/periodic-table",
					description: t("periodicTableDescription"),
					when: true
				}
			],
			when: true
		},
		{
			title: t("toolbox"),
			items: [
				{
					title: t("wordList"),
					link: "https://tool.retiehe.com/wordlist",
					when: true
				},
				{
					title: t("timer"),
					link: "https://tool.retiehe.com/timer",
					when: true
				},
				{
					title: t("calculator"),
					link: "https://tool.retiehe.com/calculator",
					when: true
				},
				{
					title: t("marquee"),
					link: "https://tool.retiehe.com/marquee",
					when: true
				},
				{
					title: t("textEditor"),
					link: "https://tool.retiehe.com/texteditor",
					when: true
				}
			],
			when: true
		},
		{
			title: t("otherProjects"),
			items: [
				{
					title: "Unofficial ChatGPT Client",
					link: "https://chatgpt.shangzhenyang.com/",
					when: !isChinaSite
				},
				{
					title: t("uwCampusPaths"),
					link: "https://paths.shangzhenyang.com/",
					when: true
				}
			],
			when: true
		}
	];

	const groupElements = groups.map((group) => {
		if (!group.when) {
			return null;
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
