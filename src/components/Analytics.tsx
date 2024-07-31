"use client";

import { isChinaSite } from "@/i18n";
import { useEffect } from "react";
import ReactGA from "react-ga4";

function Analytics(): JSX.Element {
	useEffect(() => {
		setTimeout(() => {
			if (isChinaSite) {
				const stat = document.createElement("script");
				stat.async = true;
				stat.src =
					"https://hm.baidu.com/hm.js?f3b968b3aa65f4adeb5425c7d1ed291c";
				document.body.appendChild(stat);
			} else {
				ReactGA.initialize("G-DKZ5ZLG4FT");
				ReactGA.send("pageview");
			}
		}, 1000);
	}, []);

	return <></>;
}

export default Analytics;
