# Askeladden eslint config

This repo contains sets of opinionated linting rules (eslint-configs) for Askeladden projects.

## Installing

```sh
yarn add --dev @askeladden/eslint-config-askeladden

# or using npm:

npm install --save-dev @askeladden/eslint-config-askeladden
```

## Quick start

Depending on your project, add one of these to your `.eslintrc` file:

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
