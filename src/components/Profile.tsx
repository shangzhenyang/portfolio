import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBilibili,
	faGithub,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import styles from "@/styles/Profile.module.css";

function Profile() {
	const [isChina, setIsChina] = useState(false);

	const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

	useEffect(() => {
		setIsChina(timeZone === "Asia/Shanghai");
	}, [timeZone]);

	return (
		<main className={styles["profile"]}>
			<div>
				<Image
					className={styles["avatar"]}
					src="https://assets.retiehe.com/ysz/avatar-transparent.png"
					alt=""
					height={150}
					width={150}
					priority={true}
				/>
				<h1 className={styles["title"]}>Shangzhen Yang</h1>
				<div className={styles["description"]}>
					<div>CS Student at University of Washington</div>
					<div>Full-Stack Software Engineer</div>
				</div>
				<a
					className={styles["btn"]}
					href="https://github.com/shangzhenyang">
					<FontAwesomeIcon icon={faGithub} />
					GitHub
				</a>
				{!isChina && <a
					className={styles["btn"]}
					href="https://www.linkedin.com/in/shangzhenyang/">
					<FontAwesomeIcon icon={faLinkedin} />
					LinkedIn
				</a>}
				{isChina && <a
					className={styles["btn"]}
					href="https://space.bilibili.com/5931839">
					<FontAwesomeIcon icon={faBilibili} />
					Bilibili
				</a>}
			</div>
		</main>
	);
}

export default Profile;
