export default {
  // 导航栏
  nav: [
    { text: '首页', link: '/' },
    {
      text: '开发技巧', items: [
        { text: 'CSS', link: '/skills/css/spinningBall' },
        { text: 'JavaScript', link: '/skills/javascript/markdown-examples' },
      ]
    },
    { text: '学习笔记', link: '/documents/cors跨域' },
    {
      text: '工具库', items: [
        { text: '精灵图转换', link: '/tools/sprites/sprites' },
        { text: 'JavaScript', link: '/skills/javascript/markdown-examples' },
      ]
    },
  ],

  // 侧边栏
  sidebar: {
    '/skills/css': [
      {
        text: 'CSS开发技巧',
        items: [
          { text: '旋转小球', link: '/skills/css/spinningBall' },
          { text: '文字渐变', link: '/skills/css/textGradient' },
        ]
      },
    ],
    '/skills/javascript': [
      {
        text: 'JavaScript开发技巧',
        items: [
          { text: 'markdown-examples', link: '/skills/javascript/markdown-examples' },
        ]
      },
    ],
    '/documents/': [
      {
        text: '学习笔记',
        items: [
          { text: 'CORS简单请求+预检请求', link: '/documents/cors跨域' },
          { text: '关于Vue中data的定义', link: '/documents/关于Vue中data的定义' },
        ]
      },
    ],
    '/tools/sprites': [
      {
        text: '精灵图转换',
      },
    ]
  },
}