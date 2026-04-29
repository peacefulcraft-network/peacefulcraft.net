const js = require("@eslint/js");

module.exports = [
	js.configs.recommended,
	{
		files: ["src/**/*.js"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				Atomics: "readonly",
				SharedArrayBuffer: "readonly",
				window: "readonly",
				document: "readonly",
				console: "readonly"
			}
		},
		rules: {
			indent: ["error", "tab"],
			"linebreak-style": ["error", "unix"],
			quotes: ["error", "single"],
			semi: ["error", "always"]
		}
	}
];
