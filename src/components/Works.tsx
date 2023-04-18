import styles from "@/styles/Works.module.css";

import DownloadBar from "@/components/DownloadBar";
import Footer from "@/components/Footer";
import ListGroup from "@/components/ListGroup";

import type ListItem from "@/types/ListItem";

interface Group {
	title: string;
	items: ListItem[];
}

function Works() {
	const groups: Group[] = [{
		title: "Main Projects",
		items: [{
			title: "AirPortal",
			link: "https://airportal.cn/",
			description: "A cross-platform file transfer.",
			extra: <DownloadBar
				appName="AirPortal"
				appStoreLink="https://apps.apple.com/app/id1524074327"
				googlePlayLink="https://play.google.com/store/apps/details?id=cn.airportal&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
			/>
		}, {
			title: "Lime Start Page",
			link: "https://limestart.cn/intro-en",
			description: "A beautiful New Tab page for your web browser."
		}, {
			title: "Toolbox",
			link: "https://tool.retiehe.com/",
			description: "A web app that can help you with many things."
		}, {
			title: "Web Hosting",
			link: "https://host.retiehe.com/",
			description: "An out-of-box web hosting service for beginners."
		}]
	}, {
		title: "Collaborative Project",
		items: [{
			title: "Hua Classmate",
			link: "https://uwclassmate.com/",
			description: "A course commenting website for UW students."
		}]
	}, {
		title: "Open-Sourced Projects",
		items: [{
			title: "Encoder",
			link: "https://encoder.shangzhenyang.com/",
			description: "Easily encode text into various formats."
		}, {
			title: "Random Number",
			link: "https://random.shangzhenyang.com/",
			description: "A customizable random number generator."
		}, {
			title: "Bing Wallpaper API",
			link: "https://github.com/shangzhenyang/bing-wallpaper",
			description: "Implemented using Cloudflare Pages Functions."
		}, {
			title: "Periodic Table",
			link: "https://www.npmjs.com/package/@shangzhen/periodic-table",
			description: "Get information of elements and compounds."
		}]
	}, {
		title: "Toolbox",
		items: [{
			title: "Word List",
			link: "https://tool.retiehe.com/wordlist"
		}, {
			title: "Timer",
			link: "https://tool.retiehe.com/timer"
		}, {
			title: "Calculator",
			link: "https://tool.retiehe.com/calculator"
		}, {
			title: "Marquee",
			link: "https://tool.retiehe.com/marquee"
		}, {
			title: "Text Editor",
			link: "https://tool.retiehe.com/texteditor"
		}]
	}, {
		title: "Other Projects",
		items: [{
			title: "Unofficial ChatGPT Client",
			link: "https://chatgpt.shangzhenyang.com/",
		}, {
			title: "UW Campus Paths",
			link: "https://paths.shangzhenyang.com/",
		}, {
			title: "Math Quiz",
			link: "https://www.yangshangzhen.com/math",
		}, {
			title: "Where Gifts Are",
			link: "https://www.yangshangzhen.com/gifts",
		}, {
			title: "Chinese Character Pairing",
			link: "https://www.yangshangzhen.com/pair",
		}]
	}];

	const groupsElem = groups.map((group) => {
		return (
			<ListGroup
				key={group.title}
				items={group.items}
				title={group.title}
			/>
		);
	});

	return (
		<div className={styles["works"]}>
			<a
				id="works"
				className={styles["title"]}
				href="#works">
				My Works
			</a>
			<div className={styles["list"]}>{groupsElem}</div>
			<Footer />
		</div>
	);
}

export default Works;
