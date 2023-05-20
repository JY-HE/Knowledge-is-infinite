import { defineConfig } from 'vitepress'
import navConfig from "../globalConfig/navConfig.js";
import socialLinks from "../globalConfig/socialLinks.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学海无涯",
  description: "A VitePress Site",
  base: '/Knowledge-is-infinite/',
  // 显示最后更新时间
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://s1.ax1x.com/2023/04/03/pph0ZWQ.jpg",

    // 导航栏和侧边栏配置
    ...navConfig,

    // 社交链接
    socialLinks: socialLinks,

    // 页脚
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2023 HeJiaYong'
    // }
  }
})
