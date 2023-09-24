module.exports = {
	'env': { // 哪个环境的全局变量可用
		'browser': true,
		'es2021': true,
		'node': true
	},
	"extends": [
		"eslint:recommended",
		// "plugin:@typescript-eslint/strict"
	],// 定义好的规则
	'overrides': [],
	'parserOptions': {
		'ecmaVersion': 'latest', // 新的语法
		'sourceType': 'module', // 模块化
		'ecmaFeatures': { // 支持的特性
			'jsx': true
		},
	},
	'parser': '@typescript-eslint/parser', // 默认的解析器是espree
	'plugins': ['@typescript-eslint'], // 插件
	'rules': {
		'@typescript-eslint/no-explicit-any': 'error',
	}
};
