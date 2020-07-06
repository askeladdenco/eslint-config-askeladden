const NAME_MAP = {
  'airbnb-base': 'eslint-config-airbnb-base',
  airbnb: 'eslint-config-airbnb',
  'plugin:import/errors': ['eslint-plugin-import', 'configs', 'errors'],
  'plugin:import/warnings': ['eslint-plugin-import', 'configs', 'warnings'],
  'plugin:react/recommended': ['eslint-plugin-react', 'configs', 'recommended'],
  'plugin:jsx-a11y/recommended': [
    'eslint-plugin-jsx-a11y',
    'configs',
    'recommended',
  ],
  'plugin:@typescript-eslint/recommended': [
    '@typescript-eslint/eslint-plugin',
    'configs',
    'recommended',
  ],
};

const recursiveResolve = (obj, keyArray) => {
  if (!obj) {
    return obj;
  }
  if (!keyArray || keyArray.length === 0) {
    return obj;
  }
  const nextKey = keyArray.shift();
  return recursiveResolve(obj[nextKey], keyArray);
};

const doImport = (name) => {
  const packageName = NAME_MAP[name] || name;
  if (typeof packageName === 'string') {
    return require(packageName);
  } else {
    const moduleName = packageName.shift();
    const module = require(moduleName);
    return recursiveResolve(module, packageName);
  }
};

const flattenEslintConfig = (config) => {
  // Accepts an eslint config. Loops through its extends, and returns a flattened version
  if (!config.extends || config.extends.length === 0) {
    return config.rules;
  }
  let rules = config.rules || {};
  const extend = config.extends || [];
  for (const confPath of extend) {
    const nextConfig = flattenEslintConfig(doImport(confPath));
    rules = { ...rules, ...nextConfig.rules };
  }
  return {
    ...config,
    extends: [],
    rules,
  };
};

module.exports = { flattenEslintConfig };
