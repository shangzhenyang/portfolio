import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import ReactGA from "react-ga4";

import styles from "@/styles/Home.module.css";

import Profile from "@/components/Profile";
import Works from "@/components/Works";

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
					content="This is Shangzhen Yang's portfolio website."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, viewport-fit=cover"
				/>
				<link
					rel="alternate"
					hrefLang="zh-CN"
					href="https://www.yangshangzhen.com/"
				/>
				<link rel="icon" href={FAVICON} />
				<link rel="apple-touch-icon" href={FAVICON} />
			</Head>
			<Image
				className={[styles["bg"], styles["bg-img"]].join(" ")}
				src="https://assets.retiehe.com/blur/reichenbach-falls.jpg"
				alt=""
				height={1080}
				width={1920}
				priority={true}
			/>
			<div className={[styles["bg"], styles["bg-cover"]].join(" ")}></div>
			<div className={styles["root"]}>
				<Profile />
				<Works />
			</div>
		</>
	);
}
