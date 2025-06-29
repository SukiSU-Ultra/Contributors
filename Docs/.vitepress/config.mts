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
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>'
        }, 
        link: 'https://t.me/SukiKsu' 
      },
    ],

    footer: {
      message: 'Built with ❤️ for the SukiSU-Ultra Contributors by Saksham',
      copyright: 'Copyright © 2025 SukiSU-Ultra & Contributors'
    },

    search: {
      provider: 'local'
    }
  },

  vite: {
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
    }
  }
})
