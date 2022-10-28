/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'placehold.co',
			},
		],
	},
	reactStrictMode: false,
	swcMinify: false,
};

module.exports = nextConfig;
