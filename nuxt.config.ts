// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: '我的博客',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '一个使用 Nuxt 3 构建的博客系统' }
      ]
    }
  },
  // 修改 TypeScript 配置
  typescript: {
    strict: true,
    shim: false
  }
})