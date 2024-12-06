<template>
    <div class="navs ">
        <router-link active-class="nav-active-class" class="nav" to="/home">
            <b class="iconfont">&#xea89;</b>
            {{ $t("toolbox.navs.home") }}
        </router-link>
        <router-link active-class="nav-active-class" class="nav" to="/tool">
            <b class="iconfont">&#xea7e;</b>
            {{ $t("toolbox.navs.tool") }}
        </router-link>
        <router-link active-class="nav-active-class" class="nav" to="/about">
            <b class="iconfont">&#xea7a;</b>
            {{ $t("toolbox.navs.about") }}
        </router-link>
    </div>

</template>

<script setup>
</script>

<style scoped lang="scss">
.navs {
    margin-left: 20px;
    height: 60px;
    display: flex;
    height: 60px;
    flex-grow: 2;


    .nav {
        -webkit-app-region: no-drag;
        margin: 10px 5px;
        border-radius: 5px;
        height: 40px;
        line-height: 40px;
        padding: 0 5px;
        transition: all 0.3s ease;
        border: 1px solid transparent;
        white-space: pre;

        &:hover {
            transition: all 0.3s ease;
            background-color: rgba(102, 176, 255, 0.1);
            color: var(--el-color-primary);

        }
    }

    .nav-active-class {
        color: var(--el-color-primary);
        // border-bottom: 1px solid;
        // border-bottom-left-radius: 0;
        // border-bottom-right-radius: 0;
    }

}
</style>