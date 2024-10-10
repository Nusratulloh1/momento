// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: './app-loading.html',
  app: {
    head: {
      title: 'Momento - News AI app',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/devtools',
    // 'nuxt-swiper'
  ],
  css: [
    '~/assets/styles/css/tailwind.css',
    '~/assets/styles/scss/main.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
