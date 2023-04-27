import translationEnUs from "@/translations/en-us.json";
import translationZhCn from "@/translations/zh-cn.json";

const isChinaSite = process.env.NEXT_PUBLIC_LOCALE === "cn";

function t(key: string): string {
	if (isChinaSite) {
		return translationZhCn[key as keyof typeof translationZhCn];
	} else {
		return translationEnUs[key as keyof typeof translationEnUs];
	}
}

export { isChinaSite, t };
