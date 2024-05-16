import Analytics from "@/components/Analytics";
import "@/globals.css";
import { isChinaSite, t } from "@/i18n";
import { Metadata } from "next";
import { ReactNode } from "react";

const FAVICON = "/images/avatar.png";

export const metadata: Metadata = {
	authors: {
		name: t("shangzhenYang"),
	},
	description: t("metaDescription"),
	icons: {
		apple: FAVICON,
		icon: FAVICON,
	},
	title: t("shangzhenYang"),
};

interface RootLayoutProps {
	children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps): JSX.Element {
	const csp = {
		"base-uri": [
			"'none'",
		],
		"connect-src": [
			"'self'",
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
			"https://cdn.idealclover.cn",
			"https://developer.apple.com",
			"https://maorx.cn",
			"https://www.bing.com",
		],
		"script-src": [
			"'self'",
			"'unsafe-inline'",
		],
		"style-src": [
			"'self'",
			"'unsafe-inline'",
		],
	};
	if (process.env.NODE_ENV === "development") {
		csp["script-src"].push("'unsafe-eval'");
	}
	if (isChinaSite) {
		csp["connect-src"].push("https://collect-v6.51.la");
		csp["script-src"].push("https://sdk.51.la");
	} else {
		csp["connect-src"].push(
			"https://*.google-analytics.com",
			"https://*.analytics.google.com",
			"https://*.googletagmanager.com",
		);
		csp["img-src"].push(
			"https://*.google-analytics.com",
			"https://*.googletagmanager.com",
		);
		csp["script-src"].push("https://www.googletagmanager.com");
	}
	const cspString = Object.entries(csp).map(([key, value]) => {
		return key + " " + value.join(" ");
	}).join("; ");

	return (
		<html lang={isChinaSite ? "zh-CN" : "en-US"}>
			<head>
				<meta
					httpEquiv="Content-Security-Policy"
					content={cspString}
				/>
				<base target="_blank" />
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
			</head>
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}

export default RootLayout;
