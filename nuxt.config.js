import fs from 'fs'
import path from 'path'
import Constants from './constants'

const locales = fs
  .readdirSync(path.join(__dirname, 'locales'))
  .map((file) => file.replace(/\.json/, ''))

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nals-test',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/lodash',
    '@/plugins/toast',
    '@/plugins/constants',
    '@/plugins/axios',
    '@/plugins/utils',
    '@/plugins/store',
    '@/plugins/repositories',
    '@/plugins/vuelidate',
    '@/plugins/locales',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components', extensions: ['vue'] },
    { path: '~/components/layout', extensions: ['vue'] },
    { path: '~/components/pages/Home', extensions: ['vue'] },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css

  styleResources: {
    scss: ['~/assets/styles/base/mixins.scss'],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
  ],

  i18n: {
    locales: locales.map((locale) => ({
      code: locale,
      file: `${locale}.json`,
    })),
    defaultLocale: Constants.common.LOCALE,
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: Constants.common.LOCALE,
    },
    baseUrl: '/',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: Constants.common.LOCALE,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.NUXT_APP_BASE_URL_API,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
