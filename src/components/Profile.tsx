import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "@/styles/Profile.module.css";

function Profile() {
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
				<a
					className={styles["btn"]}
					href="https://www.linkedin.com/in/shangzhenyang/">
					<FontAwesomeIcon icon={faLinkedin} />
					LinkedIn
				</a>
			</div>
		</main>
	);
}

export default Profile;
