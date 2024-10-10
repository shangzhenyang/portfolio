"use client";

import i18n, { isChinese, t } from "@/i18n";
import avatar from "@/images/avatar-transparent.png";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import {
	faBilibili,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faGraduationCap,
	faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

fontAwesomeConfig.autoAddCss = false;

function Profile(): JSX.Element {
	const [email, setEmail] = useState<string>("");
	const [isChinaUser, setIsChinaUser] = useState<boolean>(isChinese);

	const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

	useEffect(() => {
		const lang = ((): "en-US" | "zh-CN" => {
			if (
				navigator.language.startsWith("zh") ||
				navigator.language.startsWith("yue")
			) {
				return "zh-CN";
			} else {
				return "en-US";
			}
		})();
		const frontendUrl = lang.startsWith("zh")
			? "https://www.yangshangzhen.com/"
			: "https://www.shangzhenyang.com/";
		if (
			process.env.NODE_ENV === "production" &&
			lang !== i18n.language &&
			!/bot|spider/i.test(navigator.userAgent)
		) {
			window.location.href = frontendUrl;
		}
	}, []);

	useEffect(() => {
		setEmail(window.atob("aGVsbG9Ac2hhbmd6aGVueWFuZy5jb20="));
	}, []);

	useEffect(() => {
		if (!isChinese) {
			setIsChinaUser(timeZone === "Asia/Shanghai");
		}
	}, [timeZone]);

	return (
		<main className="profile">
			<div>
				<Image
					className="avatar"
					src={avatar}
					alt="Avatar"
					height={150}
					width={150}
					draggable={false}
					placeholder="empty"
					priority={true}
					unoptimized={true}
				/>
				<h1>{t("shangzhenYang")}</h1>
				<div className="description">
					<div>
						<FontAwesomeIcon
							icon={faGraduationCap}
							fixedWidth
						/>
						{t("csAtUw")}
					</div>
					<div>
						<FontAwesomeIcon
							icon={faLaptopCode}
							fixedWidth
						/>
						{t("fullStackSoftwareEngineer")}
					</div>
					<div>
						<FontAwesomeIcon
							icon={faEnvelope}
							fixedWidth
						/>
						{t("email")}
						<a
							className="underline"
							href={`mailto:${email}`}
						>
							{email || "[email protected]"}
						</a>
					</div>
				</div>
			</div>
			<div className="buttons">
				<a
					className="button"
					href="https://github.com/shangzhenyang"
				>
					<FontAwesomeIcon
						icon={faGithub}
						fixedWidth
					/>
					GitHub
				</a>
				{!isChinaUser && (
					<a
						className="button"
						href="https://www.linkedin.com/in/shangzhenyang/"
					>
						<FontAwesomeIcon
							icon={faLinkedin}
							fixedWidth
						/>
						LinkedIn
					</a>
				)}
				{isChinaUser && (
					<a
						className="button"
						href="https://space.bilibili.com/5931839"
					>
						<FontAwesomeIcon
							icon={faBilibili}
							fixedWidth
						/>
						{t("bilibili")}
					</a>
				)}
			</div>
		</main>
	);
}

export default Profile;
