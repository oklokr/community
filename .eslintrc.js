module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential', // Vue 3에 적합한 규칙
    '@vue/typescript/recommended', // TypeScript를 사용하는 경우
    'plugin:@typescript-eslint/recommended', // TypeScript용 ESLint 규칙
    'plugin:prettier/recommended', // Prettier와 통합
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser', // TypeScript를 사용하는 경우
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', { code: 120 }], // 기본 120자로 설정
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'vue/no-unused-vars': 'warn', // 사용되지 않는 변수 경고
    '@typescript-eslint/no-unused-vars': 'warn', // TypeScript에서 사용되지 않는 변수 경고
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // OS에 따라 자동으로 줄바꿈 설정
      },
    ],
  },
}
