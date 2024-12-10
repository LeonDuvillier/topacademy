module.exports = {
	async rewrites() {
		return [
			{
				source: '/sitemap.xml',
				destination: '/api/sitemap',
			},
		]
	},
	reactStrictMode: false,
	swcMinify: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"]
		});
		return config;
	}
	module.exports = {
		exportPathMap: async function (defaultPathMap) {
		  delete defaultPathMap['/courses/business-analysis-foundations-an-all-inclusive-course'];
		  return defaultPathMap;
		},
	  };
	  
};
