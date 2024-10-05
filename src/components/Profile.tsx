"use client";

import { isChinaSite, t } from "@/i18n";
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
	const [isChinaUser, setIsChinaUser] = useState<boolean>(isChinaSite);

	const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

	useEffect(() => {
		if (!isChinaSite) {
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
				{isChinaSite && (
					<div className="description">
						<div>现就读于华盛顿大学计算机系</div>
						<div>
							<a
								className="transition-opacity duration-200 border-b border-solid hover:opacity-80 active:opacity-60"
								href="https://www.retiehe.com/"
								rel="noopener"
							>
								热铁盒
							</a>
							创始人兼软件工程师
						</div>
					</div>
				)}
				{!isChinaSite && (
					<div className="description has-icon">
						<div>
							<FontAwesomeIcon
								icon={faGraduationCap}
								fixedWidth
							/>
							CS Student at University of Washington
						</div>
						<div>
							<FontAwesomeIcon
								icon={faLaptopCode}
								fixedWidth
							/>
							Full-Stack Software Engineer
						</div>
						<div>
							<FontAwesomeIcon
								className="mr-2"
								icon={faEnvelope}
								fixedWidth
							/>
							Email:{" "}
							<a
								className="underline"
								href="mailto:hello@shangzhenyang.com"
							>
								hello@shangzhenyang.com
							</a>
						</div>
					</div>
				)}
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
