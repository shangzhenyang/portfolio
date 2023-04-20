import { useEffect } from "react";
import Head from "next/head";
import ExportedImage from "next-image-export-optimizer";
import ReactGA from "react-ga4";

import bgImg from "@/images/reichenbach-falls.jpg";
import favicon from "@/images/avatar.png";
import styles from "@/styles/Home.module.css";

import Profile from "@/components/Profile";
import Works from "@/components/Works";

export default function Home() {
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
				<link rel="icon" href={favicon.src} />
				<link rel="apple-touch-icon" href={favicon.src} />
			</Head>
			<ExportedImage
				className={[styles["bg"], styles["bg-img"]].join(" ")}
				src={bgImg}
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
