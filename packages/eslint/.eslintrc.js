module.exports = {
	root: true, // 作用的目录是根目录
	'env': { // 哪个环境的全局变量可用
		'browser': true,
		'es2021': true,
		'node': true
	},
	// "extends": "eslint:recommended",// 定义好的规则
	'overrides': [],
	'parserOptions': {
		'ecmaVersion': 'latest', // 新的语法
		'sourceType': 'module', // 模块化
		'ecmaFeatures': { // 支持的特性
			'jsx': true
		},
	},
	'rules': {
		// 0 - off 关闭规则 1 - warn 开启规则，警告级别(不会导致程序退出) 2 - error 开启规则，错误级别(当被触发的时候，程序会退出)
		// 'quotes': ['error', 'double'], //
		'no-alert': 'error',
	},
	'globals': { // 全局变量
		custom: 'readonly'
	}
};
