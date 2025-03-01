// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  pages: true,
  modules: ['@pinia/nuxt'],
  // 피니아 모듈설정
  app: {
    head: {
      title: 'Nuxt 3 쇼핑몰',
      meta: [
        { name: 'description', content: 'Nuxt 3을 이용한 쇼핑몰입니다.' },
        { name: 'keywords', content: 'nuxt3, shopping, vue' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  }
})
