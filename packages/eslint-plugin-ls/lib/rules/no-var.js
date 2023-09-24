/**
 * @fileoverview 不能有var
 * @author fc
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
	meta: {
		type: 'problem', // `problem`, `suggestion`, or `layout`
		docs: {
			description: '不能有var',
			recommended: false,
			url: null, // URL to the documentation page for this rule
		},
		fixable: 'code', // Or `code` or `whitespace`
		schema: [], // Add a schema if the rule has options
		messages: {
			noVar: '不能有var'
		}
	},

	create(context) {
		const sourceCode = context.getSourceCode();


		return {
			// visitor functions for different types of nodes
			VariableDeclaration(node) {
				console.log(node);
				if (node.kind === 'var') {
					context.report({
						node,
						// message: '不能有var'
						messageId: 'noVar',
                        fix: function(fixer) {
                            const tokens = sourceCode.getTokens(node);
                            const varToken = tokens.find(token => token.type === 'Keyword' && token.value === 'var');
                            return fixer.replaceText(varToken, 'const');
                        }
					});
				}
			}
		};
	},
};
