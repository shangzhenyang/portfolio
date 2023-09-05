import { isChinaSite } from "@/i18n";
import { Head, Html, Main, NextScript } from "next/document";

function Document(): JSX.Element {
	return (
		<Html lang={isChinaSite ? "zh-CN" : "en-US"}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html >
	);
}

export default Document;
