# eslint-plugin-ls

自定义插件

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-ls`:

```sh
npm install eslint-plugin-ls --save-dev
```

## Usage

Add `ls` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ls"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ls/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


