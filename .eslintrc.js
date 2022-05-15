module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    singleline: {
      max: 1,
    },
    multiline: {
      max: 1,
    },
  },
  // 单独设置eslint,api 文件，不校验驼峰格式
  overrides: [
    {
      files: ['src/api/**/*.ts'],
      rules: { camelcase: 'off' },
    },
  ],
}
