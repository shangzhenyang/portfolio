import { isChinaSite, t } from "@/i18n";

import styles from "@/styles/Footer.module.css";

function Footer(): JSX.Element {
	return (
		<footer className={styles["footer"]}>
			<div>
				&copy; {new Date().getFullYear()}{" "}{t("shangzhenYang")}
			</div>
			{isChinaSite &&
				<div>
					<a href="https://beian.miit.gov.cn/" rel="noopener">
						闽ICP备18016273号-6
					</a>
				</div>
			}
			{!isChinaSite &&
				<>
					<div>Apple and the Apple Logo are registered trademarks of Apple Inc.</div>
					<div>Google Play and the Google Play logo are trademarks of Google LLC.</div>
				</>
			}
		</footer>
	);
}

export default Footer;
