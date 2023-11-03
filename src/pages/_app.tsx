import { isChinaSite } from "@/i18n";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Component {...pageProps} />
			{!isChinaSite && <Analytics />}
		</>
	);
}

export default App;
