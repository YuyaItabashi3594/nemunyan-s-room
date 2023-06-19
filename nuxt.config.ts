// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  vite: {
    server: {
        hmr: {
            port: 3008
        },
        watch: {
          usePolling: true
        }
    }
}
})
