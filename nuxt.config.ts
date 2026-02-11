export default defineNuxtConfig({
  modules: [
    '@nuxthub/core',
    '@onmax/nuxt-better-auth'
  ],

  hub: {
    db: {
      dialect: 'postgresql',
      driver: 'neon-http',
      casing: 'snake_case',
    },
  },

  compatibilityDate: '2026-02-01',

  devtools: { enabled: true },
})
