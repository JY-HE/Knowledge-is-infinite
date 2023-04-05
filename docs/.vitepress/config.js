import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学海无涯",
  description: "A VitePress Site",
  base:'/docs/', 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:"https://s1.ax1x.com/2023/04/03/pph0ZWQ.jpg",
    // siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // footer: {
    //   message: '其实我也不知道写啥注脚',
    //   copyright: '那我就随便写个吧',
    // }
  }
})
