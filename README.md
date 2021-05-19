# Askeladden eslint config

This repo contains sets of opinionated linting rules (eslint-configs) for Askeladden projects.

## Installing

```sh
npx install-peerdeps --dev @askeladden/eslint-config-askeladden -x -W
``` 

_Alternatively, you can manually install correct version of each package listed by:_
```
npm info "@askeladden/eslint-config-askeladden@latest" peerDependencies
```

_If you have a monorepo using e.g. Yarn workspaces, it's recommended to install 
it in the common/root folder._


## Quick start

### `.eslintrc`

From the root directory of your (mono-)repo, create a config file `.eslintrc`.

```json
{
  "parser": "@typescript-eslint/parser",
  "env": { "browser": true, "node": true },
  "extends": ["@askeladden/eslint-config-askeladden"],
  "rules": {}
}
```

_Note: the default export extended here is adapted to a React project with Typescript, formatted with Prettier. 
It should also work for a non-React code base. If this does not fit your project, see [Slow start](#slow-start)._ 

### `.eslintignore`

You also want an ignore-file, ignoring all dist, build and node_modules folders:

```
**/dist/*
**/build/*
**/node-modules/*
**/__mocks__/*
**/.cache/*
**/public/*
coverage
*.css
*.json
prettier.config.js
```

### `prettier.config.js`
```
const commonConfig = require('@askeladden/eslint-config-askeladden/prettier.config');

module.exports = commonConfig;
```

_These files should be placed in the root directory, also for multi-workspace mono repos_

### `package.json` – recommended tasks
```json 
"lint": "eslint .",
"lint:ignore-warnings": "eslint . --quiet",
"lint:prettier-check": "prettier --check \"**/*.{js,jsx,ts,tsx,json}\"",
"lint:prettier": "prettier --write \"**/*.{js,jsx,ts,tsx,json}\""
```

_We recommend `lint:ignore-warnings` and `lint:prettier-check` to be run on CI test tasks, to prevent PRs with errors to be merged to master._
_These tasks should be placed in the root directory, also for multi-workspace mono repos_

### `wercker.yml`

If we are (still) using wercker when you read this, add steps to the test job for all branches that run the following checks:

```
linting:
  steps:
    - script:
      name: ESLint check
      code: npm run lint:ignore-warnings
    - script:
      name: Prettier check
      code: npm run lint:prettier-check
```

### Commit hooks

We can use husky and lint-staged to identify errors when we commit, stopping us from commiting invalid code.
This will also run prettier and fix some of the errors automatically.

```
# Install dependencies
yarn add -D husky lint-staged
```

In `package.json`, define which tasks to be run on commit. We recommend on-commit hooks to fix and validate both eslint and prettier, which is included in the config below:

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{js,jsx,ts,tsx,css}": [
    "prettier --write",
    "eslint --quiet --fix"
  ],
  "*.{json, md}": [
    "prettier --write"
  ]
},
```

## Slow start

`@askeladden/eslint-config-askeladden` consists of several small sets of rules:

- javascript
- react
- typescript
- prettier
- prettier-react
- prettier-typescript

For a given project, you will probably need several of them. For example: If you want to add `javascript` and `react`, `prettier` and `prettier-react` to your repo, add the following to your `.eslintrc` config:

```json
{
  "env": {
    "browser": true
  },
  "extends": [
    "@askeladden/eslint-config-askeladden/javascript",
    "@askeladden/eslint-config-askeladden/react",
    "@askeladden/eslint-config-askeladden/prettier",
    "@askeladden/eslint-config-askeladden/prettier-react"
  ]
}
```

### Recommended sets

Instead of adding rule sets one by one, you can use one of four collections:

- `@askeladden/eslint-config-askeladden/javascript`
- `@askeladden/eslint-config-askeladden/react-recommended`
- `@askeladden/eslint-config-askeladden/typescript-recommended`
- `@askeladden/eslint-config-askeladden/react-typescript-recommended`
- `@askeladden/eslint-config-askeladden/react-native-typescript-recommended` 

_`@askeladden/eslint-config-askeladden` can be used as shorthand for `@askeladden/eslint-config-askeladden/react-typescript-recommended`._

You use collections in the same way you add rule sets: By adding them to the `extends` array in `.eslintrc`:

```json
{
  "env": {
    "browser": true
  },
  "parser": "@typescript-eslint/parser",
  "extends": ["@askeladden/eslint-config-askeladden/react-typescript-recommended"]
}
```

The following is a overview of the rules each collection includes:

|                     | `default` | `react-recommended` | `typescript-recommended` | `react-typescript-recommended` |
| ------------------- | --------- | ------------------- | ------------------------- | ------------------------------ |
| javascript          | ✅        | ✅                  | ✅                        | ✅                             |
| prettier            | ✅        | ✅                  | ✅                        | ✅                             |
| react               | ✅        | ✅                  |                           | ✅                             |
| prettier-react      | ✅        | ✅                  |                           | ✅                             |
| typescript          | ✅        |                     | ✅                        | ✅                             |
| prettier-typescript | ✅        |                     | ✅                        | ✅                             |

## Publishing

This package is hosted on npm under @askeladden/eslint-config-askeladden namespace and is published using [`np`](https://github.com/sindresorhus/np). To publish a new version, run

```sh
yarn run release
```

Doing so guides you through publishing to npm, pushing tags to Github and create release notes.
