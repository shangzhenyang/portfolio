import { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBilibili,
	faGithub,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import { isChinaSite, t } from "@/i18n";

import avatar from "@/images/avatar-transparent.png";
import styles from "@/styles/Profile.module.css";

function Profile(): JSX.Element {
	const [isChinaUser, setIsChinaUser] = useState<boolean>(isChinaSite);

	const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

	useEffect(() => {
		if (!isChinaSite) {
			setIsChinaUser(timeZone === "Asia/Shanghai");
		}
	}, [timeZone]);

	return (
		<main className={styles["profile"]}>
			<div>
				<ExportedImage
					className={styles["avatar"]}
					src={avatar}
					alt="Avatar"
					height={150}
					width={150}
					draggable={false}
					placeholder="empty"
					priority={true}
				/>
				<h1 className={styles["title"]}>{t("shangzhenYang")}</h1>
				<div className={styles["description"]}>
					{isChinaSite && <>
						<div>现就读于华盛顿大学计算机系</div>
						<div>
							<a
								className={styles["link"]}
								href="https://www.retiehe.com/"
								rel="noopener"
							>热铁盒</a>
							首席执行官兼软件工程师
						</div>
					</>}
					{!isChinaSite && <>
						<div>CS Student at University of Washington</div>
						<div>Full-Stack Software Engineer</div>
					</>}
				</div>
				<a
					className={styles["btn"]}
					href="https://github.com/shangzhenyang"
				>
					<FontAwesomeIcon icon={faGithub} />
					GitHub
				</a>
				{!isChinaUser && <a
					className={styles["btn"]}
					href="https://www.linkedin.com/in/shangzhenyang/"
				>
					<FontAwesomeIcon icon={faLinkedin} />
					LinkedIn
				</a>}
				{isChinaUser && <a
					className={styles["btn"]}
					href="https://space.bilibili.com/5931839"
				>
					<FontAwesomeIcon icon={faBilibili} />
					{t("bilibili")}
				</a>}
			</div>
		</main>
	);
}

export default Profile;
