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
      link: https://github.com/JY-HE/Knowledge-is-infinite

features:
  - icon: ⚡️
    title: 视觉盛宴
    details: 打造独具个性的前端样式
  - icon: 🖖
    title: 知识源泉
    details: 总结学习成果
  - icon: 🛠️
    title: 工具库
    details: 集成提效工具
---

<style lang='scss'>
.VPContent {
  &.is-home {
      background-image: url('https://s1.ax1x.com/2023/05/14/p9cJ8r6.png');
      background-size: 100%;
      background-position: center center;
  }
}

.dark{
  .VPContent {
    &.is-home {
      background-image: url('https://s1.ax1x.com/2023/05/14/p9ctVNF.png');
      background-size: 100%;
      background-position: center center;
    }
  }
}

.VPNav{
  transition: none !important;

  .VPNavBar{
    transition: none !important;

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

      .content{
        .content-body{
          transition: none !important;
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

