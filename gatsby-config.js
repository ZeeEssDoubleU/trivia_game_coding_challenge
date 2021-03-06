module.exports = {
	siteMetadata: {
		title: "trivia_game_coding_challenge",
		siteUrl: "https://triviagamecodingchallenge.netlify.app", // No trailing slash allowed!
	},
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-offline",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
	],
};
