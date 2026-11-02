import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.report/**',
      'public/**',
      'docs/**',
      'prompts/**',
      'src/vendor/**',
    ],
  },
  js.configs.recommended,
  ...vue.configs['flat/essential'],
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    files: ['src/**/*.vue'],
    rules: { 'vue/multi-word-component-names': 'off' },
  },
  // Code 슬롯의 textarea는 입력창이 아니라 강좌 소스 문자열을 전달한다.
  {
    files: [
      'src/components/{intro,opthelper,plugin,tutorial,util,styleid,tip}/**/*.vue',
    ],
    rules: { 'vue/no-textarea-mustache': 'off' },
  },
  {
    files: ['src/components/tutorial/Decorate.vue'],
    rules: { 'vue/valid-template-root': 'off' },
  },
  {
    files: ['deploy/cloudfront-request.js'],
    languageOptions: { sourceType: 'script' },
    rules: { 'no-unused-vars': 'off' },
  },
]
