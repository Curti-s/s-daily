module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'react/jsx-props-no-spreading':'off',
    'react/jsx-filename-extension':[1, { 'extensions':['.js', '.jsx'] }],
    'arrow-parens': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': [ 'error', { 'devDependencies': true } ],
    'max-len': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'react/prop-types': 0,
  },
};
