import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学海无涯",
  description: "A VitePress Site",
  base:'/Knowledge-is-infinite/', 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:"https://s1.ax1x.com/2023/04/03/pph0ZWQ.jpg",

    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '前端技巧', link: '/skills/markdown-examples' }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '前端技巧 ',
        items: [
          { text: 'Markdown Examples', link: '/skills/markdown-examples' },
          { text: 'Runtime API Examples', link: '/skills/api-examples' }
        ]
      }
    ],

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
