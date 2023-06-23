import { Main, Head, Html, NextScript } from "next/document";

import { isChinaSite } from "@/i18n";

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
