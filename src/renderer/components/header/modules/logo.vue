<template>
    <div class="logos">
        <span class="logo iconfont">&#xe60f;</span>
        <span class="text">{{ $t("toolbox.title") }}</span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.logos {
    display: flex;
    color: var(--el-color-primary);
    transition: all 0.3s;

    .logo {
        width: 30px;
        height: 30px;
        margin: 15px 0px 15px 15px;
        font-size: 26px;
        line-height: 30px;
        text-align: center;
        -webkit-app-region: no-drag;
    }

    .text {
        white-space: pre;
        height: 30px;
        margin: 15px 0;
        font-size: 18px;
        line-height: 30px;
        -webkit-app-region: no-drag;
    }


    &:hover {
        text-shadow: 0 0 14px var(--el-color-primary);
    }
}
</style>