import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { isChinaSite, t } from "@/i18n";
import bgImg from "@/images/reichenbach-falls.jpg";
import styles from "@/styles/Home.module.css";
import classNames from "classnames";
import ExportedImage from "next-image-export-optimizer";
import Head from "next/head";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function Home(): JSX.Element {
	const FAVICON = "/images/avatar.png";

	const csp = {
		"base-uri": [
			"'none'",
		],
		"connect-src": [
			"'self'",
			"https://collect-v6.51.la",
			"https://*.google-analytics.com",
			"https://*.analytics.google.com",
			"https://*.googletagmanager.com",
		],
		"default-src": [
			"'none'",
		],
		"form-action": [
			"'none'",
		],
		"img-src": [
			"'self'",
			"https://assets.retiehe.com",
			"https://developer.apple.com",
			"https://*.google-analytics.com",
			"https://*.googletagmanager.com",
		],
		"script-src": [
			"'self'",
			"https://sdk.51.la",
			"https://www.googletagmanager.com",
		],
		"style-src": [
			"'self'",
			"'unsafe-inline'",
		],
	};
	if (process.env.NODE_ENV === "development") {
		csp["script-src"].push("'unsafe-eval'");
	}
	const cspStr = Object.entries(csp).map(([key, value]) => {
		return key + " " + value.join(" ");
	}).join("; ");

	useEffect(() => {
		setTimeout(() => {
			if (isChinaSite) {
				const stat = document.createElement("script");
				stat.async = true;
				stat.id = "LA_COLLECT";
				stat.src = "https://sdk.51.la/js-sdk-pro.min.js";
				stat.setAttribute("charset", "UTF-8");
				stat.onload = (): void => {
					LA.init({
						ck: "3H10uEy6rm6oGBgB",
						id: "3H10uEy6rm6oGBgB",
					});
				};
				document.body.appendChild(stat);
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
					content="width=device-width, initial-scale=1"
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
				className={classNames(styles["bg"], styles["bg-img"])}
				src={bgImg}
				alt=""
				height={1080}
				width={1920}
				placeholder="empty"
				priority={true}
			/>
			<div className={classNames(styles["bg"], styles["bg-cover"])}></div>
			<div className={styles["root"]}>
				<Profile />
				<LinkList />
			</div>
		</>
	);
}

export default Home;
