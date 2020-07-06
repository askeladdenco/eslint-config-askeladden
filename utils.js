const flattenEslintConfig = (config) => {
  // Accepts an eslint config. Loops through its extends, and returns a flattened version
  if (!config.extends || config.extends.length === 0) {
    return config.rules;
  }
  let rules = config.rules || {};
  const extend = config.extends || [];
  for (const confPath of extend) {
    console.log(`Flattening ${confPath}`);
    const nextConfig = require(confPath);
    rules = {...flattenEslintConfig(nextConfig), ...rules};
  }
  return {
    ...config,
    extends: [],
    rules,
  };
};

module.exports = { flattenEslintConfig };
