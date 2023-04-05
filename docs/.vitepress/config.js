import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学海无涯",
  description: "A VitePress Site",
  base: '/Knowledge-is-infinite/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://s1.ax1x.com/2023/04/03/pph0ZWQ.jpg",

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '前端技巧', link: '/skills/markdown-examples' },
      { text: '文档', link: '/documents/markdown-examples' },
      { text: '工具库', link: '/tools/sprites' }
    ],

    // 侧边栏
    sidebar: {
      '/skills/': [
        {
          text: '前端技巧',
          items: [
            { text: 'Markdown Examples', link: '/skills/markdown-examples' },
            { text: 'Runtime API Examples', link: '/skills/api-examples' }
          ]
        },
      ],
      '/documents/': [
        {
          text: '文档',
          items: [
            { text: '文档1', link: '/skills/markdown-examples' },
          ]
        },
      ],
      '/tools/': [
        {
          text: '工具库',
          items: [
            { text: '精灵图转换', link: '/tools/sprites' },
          ]
        },
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/JY-HE/Knowledge-is-infinite' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 HeJiaYong'
    }
  }
})
