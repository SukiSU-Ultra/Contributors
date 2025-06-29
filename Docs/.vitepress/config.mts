import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SukiSU-Ultra Contributors",
  description: "Meet the amazing developers who power SukiSU-Ultra",
  base: '/',
  
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap', rel: 'stylesheet' }],
    ['meta', { name: 'theme-color', content: '#667eea' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { property: 'og:title', content: 'SukiSU-Ultra Contributors' }],
    ['meta', { property: 'og:description', content: 'Meet the amazing developers who power SukiSU-Ultra' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://contributors.sukisu.org' }],
    ['meta', { property: 'og:site_name', content: 'SukiSU-Ultra Contributors' }],
    ['meta', { property: 'og:image', content: 'https://contributors.sukisu.org/logo.png' }],
  ],

  themeConfig: {
    logo: { src: '/logo.png', width: 32, height: 32 },
    siteTitle: 'SukiSU-Ultra Contributors',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/sukisu-ultra/sukisu-ultra' },
      { text: 'Telegram', link: 'https://t.me/SukiKsu' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sukisu-ultra/sukisu-ultra' },
      { icon: 'Telegram', link: 'https://t.me/SukiKsu' },
    ],

    footer: {
      message: 'Built with ❤️ for the SukiSU-Ultra Contributors by Saksham',
      copyright: 'Copyright © 2025 SukiSU-Ultra & Contributors'
    },

    search: {
      provider: 'google'
    }
  },

  vite: {
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    }
  }
})
