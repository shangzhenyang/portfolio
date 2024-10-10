import translationEnUs from "@/translations/en-us.json";
import translationZhCn from "@/translations/zh-cn.json";

export const isChinese: boolean =
	process.env.NEXT_PUBLIC_LOCALE?.startsWith("zh") || false;
const i18n = {
	language: isChinese ? "zh-CN" : "en-US",
};

export function t(key: string): string {
	let result: string | undefined = undefined;
	if (isChinese) {
		result = translationZhCn[key as keyof typeof translationZhCn];
	}
	if (!result) {
		result = translationEnUs[key as keyof typeof translationEnUs];
	}
	return result || key;
}

export default i18n;
