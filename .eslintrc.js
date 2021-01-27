module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["@typescript-eslint", "react"],
	env: {
		browser: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"prettier/react",
		"prettier/@typescript-eslint",
	],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"react/prop-types": "off",
		// "@typescript-eslint/explicit-function-return-type": "off",
		// "@typescript-eslint/explicit-module-boundary-types": "off",
	},
};
