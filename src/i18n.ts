import translationEnUs from "@/translations/en-us.json";
import translationZhCn from "@/translations/zh-cn.json";

const isChinaSite = process.env.NEXT_PUBLIC_LOCALE === "cn";

function t(key: string): string {
	let result: string | undefined = undefined;
	if (isChinaSite) {
		result = translationZhCn[key as keyof typeof translationZhCn];
	}
	if (!result) {
		result = translationEnUs[key as keyof typeof translationEnUs];
	}
	return result || key;
}

export { isChinaSite, t };
