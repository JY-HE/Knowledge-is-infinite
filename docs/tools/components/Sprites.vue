
<template>
    <div
        class="sprites-item"
        v-for="(item, index) in sprites"
        :key="index"
        :href="item.url"
        @click="handleClick(item.url)"
    >
        <img :src="item.iconUrl" alt="" />
        <p>{{ item.name }}</p>
    </div>
</template>


<script setup>
import { computed } from "vue";

const sprites = computed(() => {
    return [
        {
            name: "Sprites Generator-精灵图转换",
            url: "https://www.toptal.com/developers/css/sprite-generator",
            iconUrl:
                "https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png",
        },
        {
            name: "GoPng-精灵图转换",
            url: "http://alloyteam.github.io/gopng/",
            iconUrl:
                "https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png",
        },
        {
            name: "CssSprite在线生成器",
            url: "http://sjli.github.io/spritemaker_extjs/example.html",
            iconUrl:
                "https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png",
        },
    ];
});

const handleClick = (url) => {
    window.open(url);
};
</script>

<style lang='scss'>
.sprites-item {
    height: 90px;
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 8px;
    padding-left: 16px;
    line-height: 24px;
    font-size: var(--vp-custom-block-font-size);
    border-color: var(--vp-custom-block-tip-border);
    color: var(--vp-custom-block-tip-text);
    background-color: var(--vp-custom-block-tip-bg);
    cursor: pointer;
    margin: 16px 0;

    p {
        margin: 0 16px;
    }
}
</style>
