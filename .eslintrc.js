/* eslint-disable no-tabs */
/* eslint-disable no-dupe-keys */
module.exports = {
	// в каких средах будет выполняться код
	env: {
		browser: true,
		es2021: true,
    jest: true,
	},
	// расширение существующих конфигов
	extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "airbnb", "plugin:i18next/recommended"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		// позволяет использовать import/export (ES-модули)
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "i18next"],
	rules: {
		"react/jsx-indent": [2, 2],
		"react/jsx-indent-props": [2, 2],
		indent: [2, 2],
    quotes: ["error", "double"],
		"react/jsx-filename-extension": [
			2,
			{ extensions: [".js", ".jsx", ".tsx"] },
		],
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		// предупреждение, если есть неиспользуемые переменные
		"no-unused-vars": "warn",
		"react/require-default-props": "off",
		"react/react-in-jsx-scope": "off",
		// предупреждение при спред-пропсах {...rest}
		"react/jsx-props-no-spreading": "warn",
		"react/function-component-definition": "off",
		"no-shadow": "off",
		"import/extensions": "off",
		"import/no-extraneous-dependencies": "off",
		"no-underscore-dangle": "off",
		indent: "off",
		"linebreak-style": 0,
    "i18next/no-literal-string": ["error", { markupOnly: true }],
	},
	globals: {
		__IS_DEV__: true,
	},
	// попытка зафиксить ошибки импортов модулей стилей при сборке
	overrides: [
		{
			files: ["*.scss", "*.module.scss"],
			rules: {
				"import/no-unresolved": "off",
			},
		},
	],
};