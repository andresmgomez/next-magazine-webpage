/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static01.nyt.com',
			},
		],
	},
	reactStrictMode: false,
	swcMinify: false,
};

module.exports = nextConfig;
