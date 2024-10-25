import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Systemized English",
  description: "体系化的英语学习之路",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/grammar': [
        { text: '学习之前', link: '/grammar' },
        { text: '语法概述与快速入门', link: '/grammar/1.summary' },
      ],
      '/': [
        { text: '前言', link: '/summary' },
        { text: '赞助', link: '/sponsor' },
        { text: '参与贡献', link: '/contribution' },
        // { text: 'Runtime API Examples', link: '/api-examples' }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
