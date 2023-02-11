import { useEffect } from "react";
import Head from "next/head";
import ReactGA from "react-ga4";

import styles from "@/styles/Home.module.css";

import MyWorks from "@/components/MyWorks";
import Profile from "@/components/Profile";

export default function Home() {
	const FAVICON = "https://assets.retiehe.com/ysz/avatar.png";

	useEffect(() => {
		setTimeout(() => {
			ReactGA.initialize("G-DKZ5ZLG4FT");
			ReactGA.send("pageview");
		}, 1000);
	}, []);

	return (
		<>
			<Head>
				<title>Shangzhen Yang</title>
				<meta
					name="description"
					content="This is Shangzhen Yang' s portfolio website."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, viewport-fit=cover"
				/>
				<link rel="icon" href={FAVICON} />
				<link rel="apple-touch-icon" href={FAVICON} />
			</Head>
			<div className={[styles["bg"], styles["bg-img"]].join(" ")}></div>
			<div className={[styles["bg"], styles["bg-cover"]].join(" ")}></div>
			<div className={styles["root"]}>
				<Profile />
				<MyWorks />
			</div>
		</>
	);
}
