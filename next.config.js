/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async headers() {
		if (process.env.NODE_ENV === "development") {
			return [];
		}
		return [
			{
				source: "/",
				headers: [{
					"key": "Content-Security-Policy",
					"value": "default-src 'none'; base-uri 'none'; connect-src https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; form-action 'none'; frame-ancestors 'none'; img-src 'self' https://assets.retiehe.com https://developer.apple.com https://*.google-analytics.com https://*.googletagmanager.com; script-src 'self' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'"
				}, {
					"key": "Referrer-Policy",
					"value": "strict-origin-when-cross-origin"
				}, {
					"key": "Strict-Transport-Security",
					"value": "max-age=31536000"
				}]
			},
		];
	},
	async redirects() {
		return [{
			"source": "/favicon.ico",
			"destination": "https://assets.retiehe.com/ysz/avatar.png",
			"permanent": true
		}];
	}
};

module.exports = nextConfig;
