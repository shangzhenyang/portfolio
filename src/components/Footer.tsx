import { isChinese, t } from "@/i18n";

function Footer(): JSX.Element {
	return (
		<footer>
			<div>
				&copy; {new Date().getFullYear()} {t("shangzhenYang")}
			</div>
			{isChinese && (
				<div>
					<a
						href="https://beian.miit.gov.cn/"
						rel="noopener"
					>
						闽ICP备18016273号-6
					</a>
				</div>
			)}
		</footer>
	);
}

export default Footer;
