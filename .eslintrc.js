module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:@intlify/vue-i18n/recommended',
  ],
  ignorePatterns: ['*svg'],
  plugins: [],
  // add your custom rules here
  rules: {
    'import/named': 'off',
    'import/no-mutable-exports': 'off',
    'vue/v-slot-style': 'off',
    'no-console': 'off',
    'vue/no-v-html': 'off',
    '@intlify/vue-i18n/no-unused-keys': [
      'error',
      {
        extensions: ['.js', '.vue'],
      },
    ],
    '@intlify/vue-i18n/no-raw-text': [
      'error',
      {
        attributes: {
          '/.+/': [
            'title',
            'placeholder',
            'aria-label',
            'aria-placeholder',
            'aria-roledescription',
            'aria-valuetext',
          ],
          input: ['placeholder'],
        },
        ignoreNodes: ['md-icon', 'v-icon'],
        ignorePattern: '^[-#:()&]+$',
      },
    ],
    '@intlify/vue-i18n/no-missing-keys': ['error'],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: '*', next: 'export' },
    ],
    'vue/padding-line-between-blocks': ['error'],
    'vue/v-on-function-call': ['error'],
    'vue/prefer-true-attribute-shorthand': ['error'],
    'vue/no-useless-v-bind': ['error'],
    'vue/no-template-target-blank': ['error'],
    'vue/new-line-between-multi-line-property': ['error'],
    'vue/html-comment-content-spacing': ['error'],
    'vue/html-comment-content-newline': ['error'],
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
    'vue/this-in-template': ['error'],
    'vue/html-end-tags': ['error'],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-default-prop': ['error'],
  },
  settings: {
    'vue-i18n': {
      localeDir: './locales/*.{json,json5,yaml,yml}',
    },
  },
}
