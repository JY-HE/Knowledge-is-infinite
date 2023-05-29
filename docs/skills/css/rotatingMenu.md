# 弹性旋转菜单

只使用 `HTML+CSS` 实现的弹性旋转菜单按钮

## 效果

<script setup>
    import RotatingMenu from '../components/RotatingMenu.vue'
</script>

<RotatingMenu/>

## 源码

> 注意：`<label>`标签有一个属性`for`，它的值是"menu_toggler"。这个属性值与`<input>`标签的`id`属性相对应，通过这种方式建立了关联。它的作用是告诉浏览器，当用户点击与`id`值为"menu_toggler"的元素时，它应该触发一些特定的行为。

<details>
 
<summary>查看代码</summary>

```vue
<template>
    <nav class="menu">
        <input type="checkbox" id="menu_toggler" checked />
        <label for="menu_toggler"></label>
        <ul>
            <li class="menu-item" v-for="item in 6" :key="item">
                <a href="#">{{ item }}</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
</script>

<style lang="scss">
.menu {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    input {
        width: 40px;
        height: 40px;
        opacity: 0;
        cursor: pointer;
        z-index: 2;

        &:hover + label {
            background: #fff;
            &::before,
            &::after {
                background: #fff;
            }
        }

        &:checked + label {
            background: transparent;
            &::before,
            &::after {
                top: 0;
                width: 40px;
                transform-origin: 50% 50%;
            }
            &::before {
                transform: rotate(45deg);
            }
            &::after {
                transform: rotate(-45deg);
            }
        }

        &:checked ~ ul {
            .menu-item {
                opacity: 1;

                @for $var from 1 through 6 {
                    &:nth-child(#{$var}) {
                        $value: ($var - 1) * 60deg;
                        transform: rotate($value) translateX(-110px);

                        a {
                            transform: rotate(-$value);
                        }
                    }
                }

                a {
                    pointer-events: auto;
                }
            }
        }
    }

    label {
        width: 40px;
        height: 5px;
        border-radius: 3px;
        background: rgba(255, 255, 255, 0.7);
        transition: all 0.5s;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        z-index: 1;

        &::before,
        &::after {
            display: block;
            content: "";
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 3px;
            background: rgba(255, 255, 255, 0.7);
            transition: all 0.5s;
        }
        &::before {
            top: 10px;
        }
        &::after {
            top: -10px;
        }
    }

    .menu-item {
        position: absolute;
        display: block;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 80px;
        height: 80px;
        opacity: 0;
        transition: 0.5s;

        a {
            display: block;
            width: inherit;
            height: inherit;
            line-height: 80px;
            color: rgba(255, 255, 255, 0.7);
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            text-align: center;
            text-decoration: none;
            font-size: 40px;
            pointer-events: none;
            transition: 0.2s;

            &:hover {
                box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
                color: #fff;
                background: rgba(255, 255, 255, 0.3);
                font-size: 45px;
            }
        }
    }
}
</style>
```

</details>
