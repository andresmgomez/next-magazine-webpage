/** @type {import('next').NextConfig} */
const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
	cssModules: true,
});

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
};

const nextConfig = {
	reactStrictMode: false,
	swcMinify: false,
};

module.exports = nextConfig;
