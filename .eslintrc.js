module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
		jest:true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    indent: [
      'error',
      2,
    ],
  },
};
