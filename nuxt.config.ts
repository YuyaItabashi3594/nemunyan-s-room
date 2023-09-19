// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  app: {
    baseURL: '',
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "nemunyan's room",
      meta: [
        {name: "nemunyan's room", content: "nemunyanのポートフォリオサイトです。Nuxt3で作っています。"},
      ]
    },
  },
  content: {
    highlight :{
      theme: 'github-dark'
    }
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  vite: {
    server: {
      hmr: {
        port: 3008,
      },
      watch: {
        usePolling: true,
      },
    },
  },
  generate: {
  }
});
