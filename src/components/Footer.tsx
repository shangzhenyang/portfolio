import { isChinaSite, t } from "@/i18n";

function Footer(): JSX.Element {
	return (
		<footer className="bg-black/30 text-sm leading-loose mt-auto pt-3.5 pb-4 px-6">
			<div>
				&copy; {new Date().getFullYear()} {t("shangzhenYang")}
			</div>
			{isChinaSite && (
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
