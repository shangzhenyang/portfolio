/** @type {import("next").NextConfig} */
const nextConfig = {
	images: {
		loader: "custom",
	},
	output: "export",
	reactStrictMode: true,
	transpilePackages: ["next-image-export-optimizer"],
};

module.exports = nextConfig;
