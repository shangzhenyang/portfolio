import { useEffect } from "react";
import Head from "next/head";
import classnames from "classnames";
import ExportedImage from "next-image-export-optimizer";
import ReactGA from "react-ga4";

import { isChinaSite, t } from "@/i18n";
import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";

import bgImg from "@/images/reichenbach-falls.jpg";
import styles from "@/styles/Home.module.css";

export default function Home() {
	const FAVICON = "/images/avatar.png";

	const csp = {
		"default-src": [
			"'none'"
		],
		"base-uri": [
			"'none'"
		],
		"connect-src": [
			"'self'",
			"https://*.google-analytics.com",
			"https://*.analytics.google.com",
			"https://*.googletagmanager.com"
		],
		"form-action": [
			"'none'"
		],
		"img-src": [
			"'self'",
			"https://developer.apple.com",
			"https://*.google-analytics.com",
			"https://*.googletagmanager.com",
			"https://hm.baidu.com",
			"https://browser-update.org"
		],
		"script-src": [
			"'self'",
			"https://www.googletagmanager.com",
			"https://hm.baidu.com"
		],
		"style-src": [
			"'self'",
			"'unsafe-inline'"
		]
	};
	if (process.env.NODE_ENV === "development") {
		csp["script-src"].push("'unsafe-eval'");
	}
	const cspStr = Object.entries(csp).map(([key, value]) => {
		return key + " " + value.join(" ");
	}).join("; ");

	useEffect(() => {
		import("browser-update").then(({ default: browserUpdate }) => {
			browserUpdate({
				required: { c: -1, e: -1, f: -1, o: -1, s: 0 },
				insecure: true,
				no_permanent_hide: true,
				notify_esr: true,
				reminder: 0,
				reminderClosed: 1,
				style: "bottom",
				unsupported: true,
				url: "https://browsehappy.com/"
			});
		});
		setTimeout(() => {
			if (isChinaSite) {
				const hm = document.createElement("script");
				hm.async = true;
				hm.src = "https://hm.baidu.com/hm.js?d80574fac90c818f3df7d0b7d1d75419";
				document.body.appendChild(hm);
			} else {
				ReactGA.initialize("G-DKZ5ZLG4FT");
				ReactGA.send("pageview");
			}
		}, 1000);
	}, []);

	return (
		<>
			<Head>
				<title>{t("shangzhenYang")}</title>
				<meta name="author" content={t("shangzhenYang")} />
				<meta
					name="description"
					content={t("metaDescription")}
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, viewport-fit=cover"
				/>
				<meta
					httpEquiv="Content-Security-Policy"
					content={cspStr}
				/>
				{isChinaSite && <base target="_blank" />}
				<link
					rel="alternate"
					hrefLang="en-US"
					href="https://www.shangzhenyang.com/"
				/>
				<link
					rel="alternate"
					hrefLang="zh-CN"
					href="https://www.yangshangzhen.com/"
				/>
				<link rel="icon" href={FAVICON} />
				<link rel="apple-touch-icon" href={FAVICON} />
			</Head>
			<ExportedImage
				className={classnames(styles["bg"], styles["bg-img"])}
				src={bgImg}
				alt=""
				height={1080}
				width={1920}
				placeholder="empty"
				priority={true}
			/>
			<div className={classnames(styles["bg"], styles["bg-cover"])}></div>
			<div className={styles["root"]}>
				<Profile />
				<LinkList />
			</div>
		</>
	);
}
