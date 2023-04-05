---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Knowledge is infinite"
  text: "记录个人工作学习成果"
  tagline: 你的指尖，拥有改变世界的力量
  image:
    src: https://s1.ax1x.com/2023/04/03/pph0ZWQ.jpg
    alt: "logo"
  actions:
    - theme: brand
      text: Get Started
      link: /examples/markdown-examples
    - theme: alt
      text: View on GitHub
      link: /examples/api-examples

features:
  - icon: ⚡️
    title: Vite, The DX that can't be beat
    details: Lorem ipsum...
  - icon: 🖖
    title: Power of Vue meets Markdown
    details: Lorem ipsum...
  - icon: 🛠️
    title: Simple and minimal, always
    details: Lorem ipsum...
---

<style lang='scss'>
.VPContent {
  &.is-home {
    background-image:
      linear-gradient(90deg, transparent 24px, var(--vp-c-divider) 24px, var(--vp-c-divider) 25px, transparent 25px),
      linear-gradient(transparent 24px, var(--vp-c-divider) 24px, var(--vp-c-divider) 25px, transparent 25px);
    background-size: 50px 50px;
  }
}

.dark{
  .VPContent {
    &.is-home {
      background-image:
        linear-gradient(90deg, transparent 24px, var(--vp-code-block-bg) 24px, var(--vp-code-block-bg) 25px, transparent 25px),
        linear-gradient(transparent 24px, var(--vp-code-block-bg) 24px, var(--vp-code-block-bg) 25px, transparent 25px);
      background-size: 50px 50px;
    }
  }
}

.VPNav{
  .VPNavBar{
    .container{
      .VPNavBarTitle{
        .title{
          &:hover{
            opacity: 1;
          }
          .logo{
            --f: 1;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            transform: scale(var(--f));
            transition: 0.5s;

            &:hover{
              --f: 1.2;
            }
          }
        }
      }
    }
  }
}

.image-container{
  transform: none !important;

  .image-bg, .VPImage{
    width: 200px;
    height: 200px;
    border-radius: 20px;
  }
}

</style>

