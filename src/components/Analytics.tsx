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

	return <></>;
}

export default Analytics;
