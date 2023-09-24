module.exports = {
	root: true, // 作用的目录是根目录
	env: { // 哪个环境的全局变量可用
		'browser': true,
		'es2021': true,
		'node': true
	},
	// "extends": "eslint:recommended",// 定义好的规则
	plugins: ['eslint-plugin-ls'],
	rules: {
		'ls/no-var': 'error',
	}
};
