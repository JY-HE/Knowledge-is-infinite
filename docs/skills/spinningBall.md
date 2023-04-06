<div class="box-background">
    <div class="spinningBall"></div>
</div>

<style lang='scss'>
details{
    cursor: pointer;
    &[open]{
        color: var(--vp-c-brand);;
    }
}
.box-background {
    background-image: linear-gradient(90deg, #04182c, #000c17, #04182c);
    border: 3px solid rgba(53,162,253,.267);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 360px;
}
.spinningBall{
    width: 200px;
    height: 200px;
    background: transparent;
    border: 10px solid #00d9ff;
    border-radius: 50%;
    position: relative;
    animation: round 3s ease infinite;

    &::before{
        content:'';
        display: block;
        position: absolute;
        top: 0;
        left: 14px;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        background: rgb(255,132,0);
    }

    @keyframes round {
        0%{
            rotate: 0deg;
        }
                100%{
            rotate: 360deg;
        }
    }
}
</style>

<details>
 
<summary>查看代码</summary>

```vue
<template>
    <div class="spinningBall"></div>
</template>

<style lang='scss'>
.spinningBall{
    width: 200px;
    height: 200px;
    background: transparent;
    border: 10px solid #00d9ff;
    border-radius: 50%;
    position: relative;
    animation: round 3s ease infinite;

    &::before{
        content:'';
        display: block;
        position: absolute;
        top: 0;
        left: 14px;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        background: rgb(255,132,0);
    }

    @keyframes round {
        0%{
            rotate: 0deg;
        }
        100%{
            rotate: 360deg;
        }
    }
}
</style>
```

</details>