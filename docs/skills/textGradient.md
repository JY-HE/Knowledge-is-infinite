# 文字颜色渐变多种效果

## 文字颜色从左至右渐变

<br>
<div class="textGradient1">遥想公瑾当年，小乔出嫁了，雄姿英发。</div>

<style lang='scss'>
details{
    cursor: pointer;
    &:hover{
        color: var(--vp-c-brand);
    }
    &[open]{
        color: var(--vp-c-brand);
    }
}

.textGradient1{
    width: 100%;
    text-align: center;
    line-height: 26px;
    font-weight: bold;
    font-size: 24px;
    background-image: -webkit-linear-gradient(0deg, #2081db, #e6370c);
    -webkit-background-clip: text; 
    color: transparent;
}
</style>

<details>
 
<summary>查看代码</summary>

```vue
<template>
    <div class="textGradient1"></div>
</template>

<style lang='scss'>
.textGradient{
    width: 100%;
    text-align: center;
    line-height: 26px;
    font-weight: bold;
    font-size: 24px;
    /* 背景色渐变 */
    background-image: -webkit-linear-gradient(0deg, #2081db, #e6370c);
    /* 用文本占据的空间裁剪盒子背景（此时背景颜色消失，是因为黑色文本盖住了背景色） */
    -webkit-background-clip: text; 
    /* 将文本颜色设置为透明，背景色将显示 */
    color: transparent;
}
</style>
```

</details>


## 文字颜色从上至下渐变

<br>
<div class="textGradient2">遥想公瑾当年，小乔出嫁了，雄姿英发。</div>

<style lang='scss'>
.textGradient2{
    width: 100%;
    text-align: center;
    line-height: 26px;
    font-weight: bold;
    font-size: 24px;
    background-image: -webkit-linear-gradient(-90deg, #2081db, #e6370c);
    -webkit-background-clip: text; 
    color: transparent;
}
</style>

<details>
 
<summary>查看代码</summary>

```css
.textGradient{
    /* 调整颜色渐变的角度参数 */
    background-image: -webkit-linear-gradient(-90deg, #2081db, #e6370c);
}
```

</details>


## 三色渐变

<br>
<div class="textGradient3">遥想公瑾当年，小乔出嫁了，雄姿英发。</div>

<style lang='scss'>
.textGradient3{
    width: 100%;
    text-align: center;
    line-height: 26px;
    font-weight: bold;
    font-size: 24px;
    background-image: -webkit-linear-gradient(0deg, #2081db, #e6370c 10%, #0ce667 50%);
    -webkit-background-clip: text; 
    color: transparent;
}
</style>

<details>
 
<summary>查看代码</summary>

```css
.textGradient{
    /* #e6370c 10% :  #2081db 与 #e6370c 的渐变区间0-10% */
    /* #0ce667 50% :  #e6370c 与 #0ce667 的渐变区间10-50% */
    background-image: -webkit-linear-gradient(0deg, #2081db, #e6370c 10%, #0ce667 50%);
}
```

</details>