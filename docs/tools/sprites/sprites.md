# 什么是精灵图

> CSS精灵生成器是一种在网页开发中使用的技术，它将多个小图像合并成一个称为精灵表的单个图像文件。这有助于减少网页发出的HTTP请求的数量，从而提高页面加载速度。

<br/>

## CSS Sprites Generator

这是一个简单易用的CSS精灵生成器。您只需上传要合并的图像，然后选择生成精灵表的选项，工具将为您生成相应的CSS代码。

<div
    class="sprites-item"
    @click="handleClick('https://www.toptal.com/developers/css/sprite-generator')"
    title="跳转到网页"
>
    <img src="https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png" alt="" />
    <p>CSS Sprites Generator</p>
</div>

## SmartSprites

SmartSprites是一个开源工具，可以根据指定的规则和文件夹结构生成CSS精灵。它具有更高级的功能，例如支持多个精灵表和自动更新。

<div
    class="sprites-item"
    @click="handleClick('http://www.csssprites.org/')"
    title="跳转到网页"
>
    <img src="https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png" alt="" />
    <p>SmartSprites</p>
</div>

<script setup>
const handleClick = (url) => {
    window.open(url);
};
</script>