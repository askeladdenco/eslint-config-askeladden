# Askeladden eslint config

This repo contains sets of opinionated linting rules (eslint-configs) for Askeladden projects.

## Installing

```sh
npx install-peerdeps --dev @askeladden/eslint-config-askeladden
```

_If you're installing with yarn in a yarn workspaces repo, run with -W flag_
``` 
npx install-peerdeps --dev @askeladden/eslint-config-askeladden -x -W
```


_Alternatively, you can manually install correct version of each package listed by:_
```
npm info "@askeladden/eslint-config-askeladden@latest" peerDependencies
```


## Quick start

Depending on your project, add one of these to your `.eslintrc` file, located in the root directory:

- **Pure JS:** `@askeladden/eslint-config-askeladden`
- **React JS:** `@askeladden/eslint-config-askeladden/react-recommended`
- **Typescript:** `@askeladden/eslint-config-askeladden/typescript-recommended`
- **React with Typescript:** `@askeladden/eslint-config-askeladden/react-typescript-recommended`

Example `.eslintrc` using **React with Typescript**:

```json
{
  "env": { "browser": true },
  "extends": ["@askeladden/eslint-config-askeladden/react-typescript-recommended"]
}
```

You also want an ignore-file, ignoring all dist, build and node_modules folders:

Example `.eslintignore`:
```
**/dist/*
**/build/*
**/node-modules/*
```

_These files should be placed in the root directory, also for multi-workspace mono repos_

### Recommended tasks (in package.json)
```json 
"lint": "eslint .",
"lint:ignore-warnings": "eslint . --quiet",
"lint:prettier-check": "prettier --check \"**/*.{js,jsx,ts,tsx,json}\"",
"lint:prettier": "prettier --write \"**/*.{js,jsx,ts,tsx,json}\""
```

_We recommend `lint:ignore-warnings` and `lint:prettier-check` to be run on CI test tasks, to prevent PRs with errors to be merged to master._

### On commit hooks

We can use husky and lint-staged to identify and fix errors when we commit:

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

- `@askeladden/eslint-config-askeladden`
- `@askeladden/eslint-config-askeladden/react-recommended`
- `@askeladden/eslint-config-askeladden/typescript-recommended`
- `@askeladden/eslint-config-askeladden/react-typescript-recommended`

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

|                     | `default` | `react-recommended` | `typescript-reecommended` | `react-typescript-recommended` |
| ------------------- | --------- | ------------------- | ------------------------- | ------------------------------ |
| javascript          | ✅        | ✅                  | ✅                        | ✅                             |
| prettier            | ✅        | ✅                  | ✅                        | ✅                             |
| react               |           | ✅                  |                           | ✅                             |
| prettier-react      |           | ✅                  |                           | ✅                             |
| typescript          |           |                     | ✅                        | ✅                             |
| prettier-typescript |           |                     | ✅                        | ✅                             |

## Publishing

This package is hosted on npm under @askeladden/eslint-config-askeladden namespace and is published using [`np`](https://github.com/sindresorhus/np). To publish a new version, run

```sh
yarn run release
```

Doing so guides you through publishing to npm, pushing tags to Github and create release notes.
