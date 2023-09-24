const babel = require('@babel/core');
const types = require('@babel/types');
// const arrowFunctionPlugin = require('@babel/plugin-transform-arrow-functions');

const code = `const sum = (a, b) => a+ b;`;

const visitor = {
	ArrowFunctionExpression(path) {
		const {node} = path;
		const params = node.params;
		// console.log(types.isBlock(node.body));
		const body = types.blockStatement([
			types.returnStatement(node.body)
		])
		const fn = types.functionExpression(null, params, body, false, false);
		path.replaceWith(fn);
	}
}

const arrowFunctionPlugin = { visitor };

const result = babel.transform(code, {
	plugins: [arrowFunctionPlugin]
})

console.log(result.code);