module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '../react-typescript-recommended',
  ].map(require.resolve),
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".web.ts",
          ".web.tsx",
          ".native.ts",
          ".native.tsx",
          ".android.ts",
          ".android.tsx",
          ".ios.ts",
          ".ios.tsx"
        ]
      }
    }
  }
};
